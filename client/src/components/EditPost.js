import React, { Fragment, useState} from 'react';

const baseURL = "https://my-fullstack-demo.herokuapp.com/posts";

const EditPost = ({post}) => {
    // console.log(post);
    const [description, setDescription] = useState(post.description);

    // updateDescription 

    const updateDescription = async e => {
        e.preventDefault();
        try {
            const body = { description} ;
            const response = await fetch(`${baseURL}/${post.post_id}`, {
                method: "PUT", 
                headers: {"Content-Type": "application/json"}, 
                body: JSON.stringify(body)
            });
        
            window.location = "/";
        } catch(err) {
            console.log(err.message);
        }
    }


    return (
        <Fragment>

<button type="button" class="btn btn-primary" data-toggle="modal" data-target={`#id${post.post_id}`} onClick={() => setDescription(post.description)}>
  Edit
</button>

<div class="modal" id={`id${post.post_id}`}>
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">

      <div class="modal-header">
        <h4 class="modal-title">Edit Post</h4>
        <button type="button" class="close" data-dismiss="modal" onClick={() => setDescription(post.description)}>&times;</button>
      </div>

      <div class="modal-body">
        <input type="text" className="form-control" value={description} 
                onChange={e => setDescription(e.target.value)}></input>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={() => setDescription(post.description)}>Discard</button>
        <button type="button" class="btn btn-success" data-dismiss="modal" onClick={e => updateDescription(e)}>Save</button>
      </div>

    </div>
  </div>
</div>
        </Fragment>
    );
}

export default EditPost;