import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import { reRender } from "../index";
const Post = (props) => {
  const likes = React.createRef();
  const likesCalac = () => {
    props.post.likes++;
    reRender();
  };
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.post.img} width="100%" />
        <Card.Body>
          <Card.Title>{props.post.title}</Card.Title>
          <Card.Text>{props.post.text}</Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
        <div className="likesbutton">
          <img
            src="https://i.pinimg.com/736x/96/a2/71/96a27139e8352b383677452d7dd6edd2.jpg"
            width="35px"
            onClick={likesCalac}
            alt="IMG"
          />
          <span ref={likes}>{props.post.likes}</span>
        </div>
      </Card>
    </div>
  );
};

export default Post;
