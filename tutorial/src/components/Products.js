import React from "react";
import Product from "./Product";
import AddProducts from "./AddProducts";

const Products = (props) => {
  return (
    <div className="post">
        <div style={{flexBasis: '100%'}}> <AddProducts productse={props.products}/></div>
      {props.products.map((prod) => {
        return <Product prod={prod} key={Math.random() * 1000} />;
      })}
    </div>
  );
};

export default Products;
