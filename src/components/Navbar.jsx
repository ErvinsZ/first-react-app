import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = (props) => {
  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand href="#home">
        
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link className="d-inline p-2 bg-dark text-white" href="#home">Menu</Nav.Link>
          <Nav.Link  className="d-inline p-2 bg-dark text-white" href="#home" href="#link">About</Nav.Link>
          <Nav.Link className="d-inline p-2 bg-dark text-white" href="#home" href="#link">Contact us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
