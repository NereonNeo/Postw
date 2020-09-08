import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar,Nav,Form,FormControl,Button,} from "react-bootstrap";
import {Link} from "react-router-dom";
const Menu = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" >
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/posts">Posts</Link></li>
              <li><Link to="/products">Products</Link></li>
              </ul>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
      </Navbar>
      <br />
    </>
  );
};

export default Menu;
