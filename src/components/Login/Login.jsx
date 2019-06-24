import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../state/reducers/login';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Login = (props) => {
  const refEmailInput = React.createRef();
  const refPasswordInput = React.createRef();

  const onLogin = () => {
    props.login(refEmailInput.current.value, refPasswordInput.current.value);
  };

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

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};

export default connect(
  mapStateToProps,
  { login }
)(Login);
