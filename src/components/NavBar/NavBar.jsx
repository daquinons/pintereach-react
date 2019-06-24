import React from 'react';
import { connect } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import * as loginUtils from '../../utils/login';

const NavBar = (props) => {
  const setloginOrLogout = () => {
    return !!props.token ? (
      <div>Logout</div>
    ) : (
      <Link to="/login">Login</Link>
    );
  };

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
          {setloginOrLogout()}
          <Nav />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const mapStateToProps = state => {
  return {
    token: state.login.token
  };
};

export default connect(
  mapStateToProps,
  {}
)(NavBar);
