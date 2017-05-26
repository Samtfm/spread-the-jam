import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


export const Auth = ({ component: Component, path, exact, loggedIn, currentUser}) => (
  <Route path={path} exact={exact || false} render={(props) => (
      loggedIn? (
        <Redirect to= {(currentUser.cityId) ? (`/cities/${currentUser.cityId}`) : ("/cities")} />
      ) : (
        <Component {...props} />
      )
    )}/>
);

export const Secure = ({ component: Component, path, exact, loggedIn}) => (
  <Route path={path} exact={exact || false} render={(props) => (
      loggedIn? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    )}/>
);

export const Host = ({ component: Component, path, exact, loggedIn, currentUser, eventObj}) => {
  console.log(eventObj);
  return (
    <Route path={path} exact={exact || false} render={(props) => (
      (loggedIn && (!eventObj || (currentUser.id === eventObj.hostId))) ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    )}/>
  );
};
const mapStateToPropsHost = (state, ownProps) => {
  const params = ownProps.location.pathname.split('/');
  const eventId = parseInt(params[params.length - 1]);
  return {
    loggedIn: Boolean(state.session.currentUser),
    currentUser: state.users[state.session.currentUser],
    eventObj: state.events[eventId]
    // eventObj: state.events[parseInt(ownProps.match.params.id)]
  };
};

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  currentUser: state.users[state.session.currentUser]
});

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const SecureRoute = withRouter(connect(mapStateToProps)(Secure));
export const HostRoute = withRouter(connect(mapStateToPropsHost)(Host));
