import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import withLogin from '../../hoc/withLogin';

const NavBar = props => {
  const onLogout = () => {
    props.setToken("null");
  };
  console.log(props.isLoggedIn);
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Link to="/">
          <Navbar.Brand>Pintereach</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
          {props.isLoggedIn ? (
            <a onClick={onLogout} href="/#">
              Logout
            </a>
          ) : (
            <Link to="/login">Login</Link>
          )}
          <Nav />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default withLogin(NavBar);
