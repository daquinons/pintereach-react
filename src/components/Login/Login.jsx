import React from 'react';
import { Redirect } from 'react-router';
import { login } from '../../state/reducers/auth/';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import withAuth from '../../hoc/withAuth';
import withLoading from '../../hoc/withLoading';
import HeaderContainer from '../HeaderContainer/HeaderContainer';
import Container from 'react-bootstrap/Container';

const Login = props => {
  const refUsernameInput = React.createRef();
  const refPasswordInput = React.createRef();
  const setLoading  = props.setLoading;
  const [errorMessage, setErrorMessage] = React.useState(undefined);

  React.useEffect(() => {
    setLoading(false);
  }, [errorMessage, setLoading])

  const onLogin = event => {
    event.preventDefault();
    props.setLoading(true);
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
    props.setLoading(false);
  };

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
                Login
              </Button>
            )}

        </Form>
      </Container>
    </>
  );
};

export default withAuth(withLoading(Login));
