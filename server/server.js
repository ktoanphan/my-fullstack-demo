// server/index.js

const express = require("express");
const bodyParser = require('body-parser');


const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/api/hello", (req, res) => {
    res.json({ message: "Hello from Express server!" });
  });

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});  

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});