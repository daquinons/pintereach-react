import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import withLogin from '../../hoc/withAuth';

const NavBar = props => {
  const onLogout = () => {
    props.setToken('null');
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
            {props.isLoggedIn ? (
              <>
                <Link className="nav-link" to="/boards">
                  My Boards
                </Link>
                <Link className="nav-link" to="/browse">
                  Browse
                </Link>
              </>
            ) : (
              undefined
            )}
            <Link className="nav-link" to="/about">
              About
            </Link>
          </Nav>
          {props.isLoggedIn ? (
            <Nav.Link onClick={onLogout} href="/#">
              Logout
            </Nav.Link>
          ) : (
            <>
              <Link className="nav-link" to="/login">
                Login
              </Link>
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </>
          )}
          <Nav />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default withLogin(NavBar);
