import React, { Fragment, useEffect, useState } from 'react';

import EditPost from "./EditPost";


const ListPosts = () => {

    const [posts, setPosts] = useState([]); 

    const getPosts = async () => {
        try {
            const response = await fetch("http://localhost:3001/posts"); 
            const jsonData = await response.json();

            setPosts(jsonData);
        } catch(err) {
            console.log(err.message);
        }
    }

    useEffect(() => {
        getPosts();
    }, []);


    console.log(posts); 

    // deletePost 
    const deletePost = async (id) => {
        try {
            const deletePost = await fetch(`http://localhost:3001/posts/${id}`, {
                method: "DELETE"
            });

            // use a filter to update the DOM instantly to reflect that the post was deleted
            setPosts(posts.filter(post => post.post_id !== id)); 

            console.log(deletePost);
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <Fragment>
             <table className="table mt-5 text-center">
    <thead>
      <tr>
        <th>Post ID</th>
        <th>Description</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
        {posts.map(post => (
            <tr key={post.post_id}>
               <td> {post.post_id} </td>
               <td> {post.description}</td>
               <td><EditPost post={post}></EditPost></td>
               <td><button className="btn btn-danger" onClick={() => deletePost(post.post_id)}>Delete</button></td>
            </tr>
        ))}
    </tbody>
  </table>
        </Fragment>
    );

}

export default ListPosts;