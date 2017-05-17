import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


export const Auth = ({ component: Component, path, exact, loggedIn}) => (
  <Route path={path} exact={exact || false} render={(props) => (
      loggedIn? (
        <Redirect to="/" />
      ) : (
        <Component {...props} />
      )
    )}/>
);

export const Secure = ({ component: Component, path, loggedIn}) => (
  <Route path={path} render={(props) => (
      loggedIn? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    )}/>
);

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser)
});

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const SecureRoute = withRouter(connect(mapStateToProps)(Secure));
