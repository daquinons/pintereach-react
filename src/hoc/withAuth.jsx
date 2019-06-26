import React from 'react';
import { connect } from 'react-redux';
import { login, setToken, setUserId } from '../state/reducers/auth';

function withAuth(WrappedComponent) {
  const ToExtend = class extends React.Component {
    componentDidMount() {
      if (!this.props.isLoggedIn) {
        this.props.setToken();
        this.props.setUserId();
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

  return connect(
    mapStateToProps,
    { login, setToken, setUserId }
  )(ToExtend);
}

const mapStateToProps = state => {
  return {
    isLoggedIn: !!state.auth.token && state.auth.token !== 'null'
  };
};

export default withAuth;
