import React from 'react';
import { Route } from 'react-router-dom';

import { AuthRoute } from '../util/route_util';
import SessionFormContainer from './session_form_container';
import Dashboard from './dashboard';
import HeaderContainer from './header_container';

const App = () => (
  <div>
    <h1>let's spread some JAM</h1>
    <HeaderContainer />
    <AuthRoute path='/signup' component={SessionFormContainer} />
    <AuthRoute path='/signin' component={SessionFormContainer} />
    <Route exact path='/' component={Dashboard} />

  </div>
);

export default App;
