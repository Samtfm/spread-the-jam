import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { AuthRoute, SecureRoute } from '../util/route_util';
import SessionFormContainer from './session/session_form_container';

import Dashboard from './dashboard/dashboard';
import DashboardContainer from './dashboard/dashboard_container';
import EventFormContainer from './dashboard/event_form_container';

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
      <SecureRoute exact path='/dashboard' component={DashboardContainer} />
      <SecureRoute exact path='/cities' component={CitiesContainer} />
      <SecureRoute exact path='/new-event' component={EventFormContainer} />

      <SecureRoute exact path="/" component={() => (<Redirect to="/dashboard"/>)}/>

    <div className='footer' />
  </div>
);

export default App;
