import React from 'react';
import { Route } from 'react-router-dom';
import Login from '../Login/Login';
import Register from '../Register/Register';
import BoardsList from '../BoardsList/BoardsList';

function Index() {
  return <h2>Home</h2>;
}

const AppRouter = () => {
  return (
    <>
      <Route path="/" exact component={Index} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/boards" component={BoardsList} />
    </>
  );
}

export default AppRouter;
