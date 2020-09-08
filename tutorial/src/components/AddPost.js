import React from "react";
import {reRender} from '../index.js'
function AddPost(props) {
    const imgLink = React.createRef()
    const title = React.createRef()
    const description = React.createRef()
    const addPostHandler=()=>{
        const postObj ={
           img: imgLink.current.value,
           title: title.current.value,
           text: description.current.value,
           likes: 0,
        }
        props.posts.push(postObj)
        reRender()
    }
  return (
    <>
      <div>
        <p>ImageLink</p>
        <input ref={imgLink} />
      </div>
      <div>
        <p>title</p>
        <input ref={title} />
      </div>
      <div>
        <p>description</p>
        <textarea ref={description} />
      </div>
      <button onClick={addPostHandler}>Add</button>
    </>
  );
}

export default AddPost;
