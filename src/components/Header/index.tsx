import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header: React.FC = () => {
  return(
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand>Kyle's Social Media</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link>Home</Nav.Link>
        <Nav.Link>Login</Nav.Link>
        <Nav.Link>Register</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default Header;