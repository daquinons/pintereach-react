import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import withLogin from '../../hoc/withAuth';
import styled from 'styled-components';

const StyledNavbar = styled(Navbar)`
  background-color: #0b000e;
`;

const StyledBrand = styled(Navbar.Brand)`
  &&& {
    color: #ff0075;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: white;
  margin-right: 1rem;
  &:hover {
    color: #ff0075;
  }
`;

const NavBar = props => {
  const onLogout = () => {
    props.setToken('null');
  };

  return (
    <StyledNavbar collapseOnSelect expand="lg" variant="dark">
      <Container>
        <StyledNavLink to="/">
          <StyledBrand>Pintereach</StyledBrand>
        </StyledNavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {props.isLoggedIn ? (
              <>
                <StyledNavLink activeStyle={{color: '#ff0075'}} className="nav-NavLink" to="/boards">
                  My Boards
                </StyledNavLink>
              </>
            ) : (
              undefined
            )}
          </Nav>
          {props.isLoggedIn ? (
            <StyledNavLink activeStyle={{color: '#ff0075'}} onClick={onLogout} to="/#">
              Logout
            </StyledNavLink>
          ) : (
            <>
              <StyledNavLink activeStyle={{color: '#ff0075'}} className="nav-NavLink" to="/login">
                Login
              </StyledNavLink>
              <StyledNavLink activeStyle={{color: '#ff0075'}} className="nav-NavLink" to="/register">
                Register
              </StyledNavLink>
            </>
          )}
          <Nav />
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
};

export default withLogin(NavBar);
