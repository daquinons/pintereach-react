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
      <StyledContainerFlex>
        <CardHome text="Pintereach is" />
        <CardHome text="a solution to help" />
        <CardHome text="researchers" />
        <CardHome text="to keep track of" />
        <CardHome text="articles and papers." />
        <CardHome text="" />
        <CardHome text="Create multiple boards" />
        <CardHome text="and save all the urls" />
        <CardHome text="so you will be able" />
        <CardHome text="to access them later." />
      </StyledContainerFlex>
      <Container>
        <Row>
          <Col className="text-center" md={{ span: 6, offset: 3 }}>
            <Link to="/register">
              <StyledButton variant="primary" size="lg">
                Sign Up
              </StyledButton>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
