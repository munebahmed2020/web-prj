import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css'

import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
class Header extends Component {
    
    render() { 
        return (

<div id='maindiv'>
<>
  <Navbar  bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home">  <img src='/logo.jpg' style={{ height: "80px", width: "150px", marginLeft: "-70px"}}></img></Navbar.Brand>
    <Nav className="me-auto" >
      <Link to="/" style={{marginLeft:"20px",color:"green",textDecoration: "none",}}  >Home</Link>
      
      <Link to="/services" style={{marginLeft:"20px",color:"green",textDecoration: "none"}}  >Services</Link>
      <Link to="/dispatchers" style={{marginLeft:"20px",color:"green",textDecoration: "none"}}>Dispatchers</Link>
      <Link to="/signup"style={{marginLeft:"20px",color:"green",textDecoration:"none"}}>SignUp</Link>
      <Link to="/login"style={{marginLeft:"20px",color:"green",textDecoration:"none"}}>Login</Link>
      <Link to="/aboutus"style={{marginLeft:"20px",color:"green",textDecoration:"none"}}>AboutUs</Link>
      <Form className="d-flex" style={{marginLeft:" 310px"}}>
        <FormControl
          type="search"
          placeholder="Search for dispatchers"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Nav>
    </Container>
  </Navbar>
 
 


  

</>

</div>



        );
    }
}
 
export default Header;