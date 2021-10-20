// server/index.js

const cors = require('cors');
const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');
const pool = require("./db");
const { createCipheriv } = require("crypto");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// route using DB 
app.get('/db', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM post');
    const results = { 'results': (result) ? result.rows : null};
    res.send(JSON.stringify(results));
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
})

app.get("/api/hello", (req, res) => {
  res.json({message: "Hello from Express server :) "});
})


app.post("/api/world", (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

// ROUTES 
// create a post 
app.post("/posts", async (req, res) => {
  try {
    const { description } = req.body;
    const newPost = await pool.query("INSERT INTO post (description) VALUES($1) RETURNING *", 
        [description]);

    res.json(newPost.rows[0]);

  } catch(err) {
    console.log(err.message);
  }
})


// get all posts
app.get("/posts", async (req, res) => {
  try {
    const allPosts = await pool.query("SELECT * FROM post");
    res.json(allPosts.rows);
  } catch(err) {
    console.log(err.message);
  }
});

// get a single post 
app.get("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const post =  await pool.query("SELECT * FROM post WHERE post_id = $1", [id]);
    res.json(post.rows[0]);
  } catch(err) {
    console.log(err.message);
  }
});


// update a post
app.put("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updatePost = await pool.query("UPDATE post SET description = $1 WHERE post_id = $2", [description, id]);
    res.json("post updated");
  } catch(err) {
    console.log(err.message);
  }
})


// delete a post
app.delete("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletePost = await pool.query("DELETE FROM post WHERE post_id = $1", [id]);
    res.json("post deleted");
  } catch(err) {
    console.log(err.message);
  }
})


if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
    
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});