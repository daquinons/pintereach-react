import React from 'react';
import { connect } from 'react-redux';
import { login, setToken } from '../state/reducers/login';

function withLogin(WrappedComponent) {
  const ToExtend = class extends React.Component {
    componentDidMount() {
      if (!this.props.isLoggedIn) {
        this.props.setToken();
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

  return connect(
    mapStateToProps,
    { login, setToken }
  )(ToExtend);
}


const mapStateToProps = state => {
  return {
    isLoggedIn: !!state.login.token && state.login.token !== "null"
  };
};

export default withLogin;