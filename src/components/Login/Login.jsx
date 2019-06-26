import React from 'react';
import { Redirect } from 'react-router';
import { login } from '../../state/reducers/auth/';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import withAuth from '../../hoc/withAuth';
import HeaderContainer from '../HeaderContainer/HeaderContainer';
import Container from 'react-bootstrap/Container';

const Login = props => {
  const refUsernameInput = React.createRef();
  const refPasswordInput = React.createRef();

  const [errorMessage, setErrorMessage] = React.useState(undefined);

  const onLogin = event => {
    event.preventDefault();
    login(
      refUsernameInput.current.value,
      refPasswordInput.current.value,
      onSuccess,
      setErrorMessage
    );
  };

  const onSuccess = (token, userId) => {
    props.setUserId(userId);
    props.setToken(token);
  }

  const handleMessageDismiss = () => {
    setErrorMessage(undefined);
  };

  if (props.isLoggedIn) {
    return <Redirect to="/boards" />;
  }

  return (
    <>
      <HeaderContainer>
        <span>Login</span>
      </HeaderContainer>
      <Container>
        {errorMessage ? (
          <Alert
            key="danger"
            variant="danger"
            dismissible
            onClose={handleMessageDismiss}
          >
            {errorMessage}
          </Alert>
        ) : null}
        <Form onSubmit={onLogin}>
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
          <Button type="submit" variant="light">
            Login
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default withAuth(Login);
