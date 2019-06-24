import React from 'react';
import { Redirect } from 'react-router'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Register = (props) => {
  const refEmailInput = React.createRef();
  const refUsernameInput = React.createRef();
  const refPasswordInput = React.createRef();

  const onRegister = () => {
    //props.login(refEmailInput.current.value, refPasswordInput.current.value);
  };

  if (props.isLoggedIn) {
    return <Redirect to="/" />
  }
  
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          ref={refEmailInput}
          type="email"
          placeholder="Enter an email"
        />
      </Form.Group>

      <Form.Group controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          ref={refUsernameInput}
          type="text"
          placeholder="Enter a username"
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          ref={refPasswordInput}
          type="password"
          placeholder="Enter a password"
        />
      </Form.Group>
      <Button variant="primary" onClick={onRegister}>
        Register
      </Button>
    </Form>
  );
};

export default Register;
