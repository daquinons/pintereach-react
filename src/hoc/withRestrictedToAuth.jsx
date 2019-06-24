import React from 'react';
import { Redirect } from 'react-router-dom';
import * as authUtils from '../utils/auth';

function withRestrictedToAuth(WrappedComponent, redirectTo="/login") {
  return class extends React.Component {
    render() {
      if (authUtils.isLoggedIn()) {
        return <WrappedComponent {...this.props} />;
      }
      
      return <Redirect to={redirectTo} />
    }
  };
}

export default withRestrictedToAuth;