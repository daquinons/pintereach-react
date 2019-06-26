import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Register from '../Register/Register';
import BoardsList from '../BoardsList/BoardsList';
import ArticlesList from '../ArticlesList/ArticlesList';

const AppRouter = () => {
  return (
    <>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/boards" exact component={BoardsList} />
      <Route path="/boards/:id" component={ArticlesList} />
    </>
  );
}

export default AppRouter;
