import React from 'react';
import { Redirect } from 'react-router';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import withLogin from '../../hoc/withAuth';
import HeaderContainer from '../HeaderContainer/HeaderContainer';
import Container from 'react-bootstrap/Container';

const Login = props => {
  const refUsernameInput = React.createRef();
  const refPasswordInput = React.createRef();

  const onLogin = () => {
    props.login(refUsernameInput.current.value, refPasswordInput.current.value);
  };

  if (props.isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <HeaderContainer>
        <span>Login</span>
      </HeaderContainer>
      <Container>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              ref={refUsernameInput}
              type="text"
              placeholder="Enter username"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={refPasswordInput}
              type="password"
              placeholder="Enter password"
            />
          </Form.Group>
          <Button variant="light" onClick={onLogin}>
            Login
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default withLogin(Login);
