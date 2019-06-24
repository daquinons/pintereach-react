import React from 'react';
import { Redirect } from 'react-router'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import withLogin from '../../hoc/withLogin';

const Login = (props) => {
  const refEmailInput = React.createRef();
  const refPasswordInput = React.createRef();

  const onLogin = () => {
    props.login(refEmailInput.current.value, refPasswordInput.current.value);
  };

  if (props.isLoggedIn) {
    return <Redirect to="/" />
  }
  
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control
          ref={refEmailInput}
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
      <Button variant="primary" onClick={onLogin}>
        Login
      </Button>
    </Form>
  );
};

export default withLogin(Login);
