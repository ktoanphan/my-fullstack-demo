import React, { Fragment, useState } from 'react';

const baseURL = "https://my-fullstack-demo.herokuapp.com/posts";

const AddPost = () => {
    const [description, setDescription] = useState("");

    const onSubmitForm  = async e => {
        e.preventDefault();
        try {
            const body = {description}; 
            const response = await fetch(baseURL, {
                method: "POST", 
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            //  refresh the DOM to update the new post being added.
            window.location = "/";
        } catch(err) {
            console.log(err.message);
        }

    }

    return (
        <Fragment>
            <h1 className="text-center mt-5">Post something</h1>
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                <input 
                    type="text"  
                    className="form-control"
                    value={description}
                    onChange={e => setDescription(e.target.value)}/>
                <button className="btn btn-success">Post</button>
            </form>
        </Fragment>
    );
}

export default AddPost;