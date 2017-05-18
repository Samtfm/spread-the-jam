import React from 'react';
import { Route } from 'react-router-dom';

import { AuthRoute, SecureRoute } from '../util/route_util';
import SessionFormContainer from './session/session_form_container';

import Dashboard from './dashboard/dashboard';
import Welcome from './session/welcome';
import HeaderContainer from './shared/header_container';
import CitiesContainer from './cities/cities_container';
import CityContainer from './city/city_container';


const App = () => (
  <div>
    <h1></h1>
    <HeaderContainer />
    <SecureRoute path='/cities/:id' component={CityContainer} />
    <AuthRoute exact path='/' component={Welcome} />
    <AuthRoute path='/signup' component={SessionFormContainer} />
    <AuthRoute path='/signin' component={SessionFormContainer} />
    <SecureRoute path='/dashboard' component={Dashboard} />
    <SecureRoute exact path='/cities' component={CitiesContainer} />
  </div>
);

export default App;
