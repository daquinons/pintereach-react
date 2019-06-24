import React from 'react';
import { connect } from 'react-redux';
import { login } from '../state/reducers/login';

function withLogin(WrappedComponent) {
  const ToExtend = class extends React.Component {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

  return connect(
    mapStateToProps,
    { login }
  )(ToExtend);
}


const mapStateToProps = state => {
  return {
    token: state.login.token
  };
};

export default withLogin;