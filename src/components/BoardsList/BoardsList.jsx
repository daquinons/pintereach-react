import React from 'react';
import * as authUtils from '../../utils/auth';
import withRestrictedToAuth from '../../hoc/withRestrictedToAuth';

const BoardsList = () => {
  console.log(authUtils.isLoggedIn());
  return <h2>My Boards</h2>
}

export default withRestrictedToAuth(BoardsList);