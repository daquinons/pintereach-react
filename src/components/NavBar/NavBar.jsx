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
                <Nav.Link>
                  <Link to="/boards">My Boards</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/browse">Browse</Link>
                </Nav.Link>
              </>
            ) : (
              undefined
            )}
            <Nav.Link>
              <Link to="/about">About</Link>
            </Nav.Link>
          </Nav>
          {props.isLoggedIn ? (
            <Nav.Link>
              <a onClick={onLogout} href="/#">
                Logout
              </a>
            </Nav.Link>
          ) : (
            <>
              <Nav.Link>
                <Link to="/login">Login</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/register">Register</Link>
              </Nav.Link>
            </>
          )}
          <Nav />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default withLogin(NavBar);
