import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {reRender} from '../index.js'
import {Button} from "react-bootstrap";
const AddProducts = (props) => {
    const iL = React.createRef()
    const price = React.createRef()
    const left = React.createRef()
    const des =  React.createRef()
    const Assessment = React.createRef()
    const Padd = () => {
        const productObj ={
            img: iL.current.value,
            price: price.current.value,
            left: left.current.value,
            Assessment:Assessment.current.value,
            des: des.current.value,
        }
        props.productse.push(productObj)
        reRender()
    }
  return (
    <>
    <div>
        <p>ImageLink</p>
        <input ref={iL}/>
      </div>
      <div>
        <p>Price</p>
        <input ref={price} />
      </div>
      <div>
        <p>left</p>
        <input ref={left} />
      </div>
      <div>
        <p>Assessment</p>
        <input ref={Assessment} />
      </div>
      <div>
        <p>description</p>
        <textarea ref={des}  />
      </div>
      <Button onClick={Padd}>Add</Button>
    </>
  );
};

export default AddProducts;
