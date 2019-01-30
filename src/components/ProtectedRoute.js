import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Consumer } from '../context';

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Consumer>
    {({ isLoggedIn }) => (
      <Route {...rest} render={props =>
        isLoggedIn
          ? <Component {...props} />
          : <Redirect to="/login" />
      }/>
    )}
  </Consumer>
);

export default ProtectedRoute;