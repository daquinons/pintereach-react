import React from 'react';
import { Route } from 'react-router-dom';
import Login from '../Login/Login';

function Index() {
  return <h2>Home</h2>;
}

const AppRouter = () => {
  return (
    <>
      <Route path="/" exact component={Index} />
      <Route path="/login" component={Login} />
    </>
  );
}

export default AppRouter;
