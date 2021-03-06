import React from 'react';
import HeaderContainer from '../HeaderContainer/HeaderContainer';
import StyledContainerFlex from '../StyledContainerFlex/StyledContainerFlex';
import { Link } from 'react-router-dom';
import CardHome from '../Card/CardHome';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import * as authUtils from '../../utils/auth';

const StyledButton = styled(Button)`
  background-color: #ff0075;
  border: 1px solid #fefefe;
`;

const Home = props => {
  return (
    <div>
      <HeaderContainer>
        <Row>
          <Col sm={4}>Welcome to Pintereach</Col>
        </Row>
      </HeaderContainer>

      <Container>
        <Row>
          <Col className="text-center" md={{ span: 12 }}>
            <StyledContainerFlex>
              <CardHome text="Pintereach is" />
              <CardHome text="a solution to help" />
              <CardHome text="researchers" />
              <CardHome text="to keep track of" />
              <CardHome text="articles and papers." />
              <CardHome text="Create multiple" />
              <CardHome text="boards" />
              <CardHome text="save links" />
              <CardHome text="and access them" />
              <CardHome text="whenever you want." />
            </StyledContainerFlex>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className="text-center" md={{ span: 6, offset: 3 }}>
            {authUtils.isLoggedIn() ? (
              <Link to="/boards">
                {' '}
                <StyledButton variant="primary" size="lg">
                  Go to your boards
                </StyledButton>{' '}
              </Link>
            ) : (
              <Link to="/register">
                <StyledButton variant="primary" size="lg">
                  Sign Up
                </StyledButton>
              </Link>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
