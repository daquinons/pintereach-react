import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { createUser } from '../../state/reducers/auth/';
import withLoading from '../../hoc/withLoading';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import HeaderContainer from '../HeaderContainer/HeaderContainer';
import Container from 'react-bootstrap/Container';

const Register = props => {
  const refEmailInput = React.createRef();
  const refUsernameInput = React.createRef();
  const refPasswordInput = React.createRef();

  const [successMessage, setSuccessMessage] = React.useState(undefined);
  const [errorMessage, setErrorMessage] = React.useState(undefined);

  const onRegister = async event => {
    try {
      event.preventDefault();
      props.setLoading(true);
      const message = await createUser(
        refEmailInput.current.value,
        refUsernameInput.current.value,
        refPasswordInput.current.value
      );
      if (typeof message === 'string')
        setSuccessMessage(
          message.charAt(0).toUpperCase() + message.substring(1)
        );
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      props.setLoading(false);
    }
  };

  if (props.isLoggedIn) {
    return <Redirect to="/" />;
  }

  const handleMessageDismiss = () => {
    setErrorMessage(undefined);
  };

  return (
    <>
      <HeaderContainer>
        <span>Register</span>
      </HeaderContainer>
      <Container>
        <div className="register-form">
          {successMessage ? (
            <Alert key="success" variant="success">
              {successMessage}
            </Alert>
          ) : null}

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

          <Form onSubmit={onRegister}>
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
            {props.isLoading ? (
              <Button variant="light" disabled>
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                &nbsp;Loading...
              </Button>
            ) : (
              <Button variant="light" type="submit">
                Register
              </Button>
            )}
          </Form>
        </div>
      </Container>
    </>
  );
};

export default connect(
  undefined,
  { createUser }
)(withLoading(Register));
