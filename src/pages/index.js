import React, { lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

const Home = lazy(() => import('./home'));
const About = lazy(() => import('./about'));
const Error403 = lazy(() => import('./error-403'));
const Error404 = lazy(() => import('./error-404'));

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/403" component={Error403} />
      <Route path="/404" component={Error404} />
      <Redirect to="/404" />
    </Switch>
  );
};
