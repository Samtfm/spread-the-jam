import React from 'react';
import { Route } from 'react-router-dom';

import { AuthRoute, SecureRoute } from '../util/route_util';
import SessionFormContainer from './session_form_container';
import Dashboard from './dashboard';
import Welcome from './welcome';
import HeaderContainer from './header_container';

const App = () => (
  <div>
    <h1></h1>
    <HeaderContainer />
    <AuthRoute exact path='/' component={Welcome} />
    <AuthRoute path='/signup' component={SessionFormContainer} />
    <AuthRoute path='/signin' component={SessionFormContainer} />
    <SecureRoute path='/dashboard' component={Dashboard} />

  </div>
);

export default App;
