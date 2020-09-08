import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Post from "./Post";
import AddPost from "./AddPost";
const Posts = (props) => {


  return (
      <div className='post'>
      <div style={{flexBasis: '100%'}}> <AddPost posts={props.posts}/></div>
      {props.posts.map((post) => {
        return (
            <Post
              post = {post}
              key = {Math.random()*1000}
            />
        );
      })}
      </div>
  );
};

export default Posts;
