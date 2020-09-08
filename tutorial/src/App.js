import React from "react";
import Posts from "./components/Posts";
import Products from './components/Products'
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "./App.css";
import Menu from "./components/Menu";
import { BrowserRouter, Route } from "react-router-dom";
function App(props) {
  return (

    <BrowserRouter>
      <Menu />
      <Container>
        <Route path='/posts' render={()=>{ return <Posts posts={props.posts} />}}/>
        <Route path='/products' render={()=>{ return <Products products={props.products} />}}/>
      </Container>
    </BrowserRouter>
  );
}

export default App;
