import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../Styles/Header.css";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg" className="shadow p-3  mb-5 bg-white rounded">
  <Container fluid>
  <Link to="/">
    <h5>Shaon Technical Online School</h5>
    </Link>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        
        navbarScroll
      >
        <h5 style={{marginLeft:"20px"}} className="btn btn-danger">OnGoing Project</h5>
        <a href="https://www.facebook.com/wpdesigner404" target="_blank" rel="noreferrer noopener">
        <h5 style={{marginLeft:"20px"}} className="btn btn-success">Created by Shaon Technical</h5>
        </a>
        
        {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Link
        </Nav.Link> */}
      </Nav>
      
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default Header
