import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


export const Auth = ({ component: Component, path, loggedIn}) => (
  <Route path={path} render={(props) => (
      loggedIn? (
        <Redirect to="/" />
      ) : (
        <Component {...props} />
      )
    )}/>
);

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser)
});

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
