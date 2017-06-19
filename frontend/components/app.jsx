import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import { AuthRoute, SecureRoute, HostRoute } from '../util/route_util';
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
    <Switch>
      <SecureRoute path='/cities/:id' component={CityContainer} />

      <AuthRoute path='/signup' component={SessionFormContainer} />
      <AuthRoute path='/signin' component={SessionFormContainer} />
      <SecureRoute exact path='/dashboard' component={DashboardContainer} />
      <SecureRoute exact path='/cities' component={CitiesContainer} />
      <SecureRoute exact path='/new-event' component={EventFormContainer} />
      <HostRoute exact path='/edit-event/:id' component={() => <EventFormContainer edit='true' />} />
    {/*<SecureRoute exact path="/" component={() => (<Redirect to="/dashboard"/>)}/>*/}
      <Route path='/' component={Welcome} />
    </Switch>

    <div className='footer'>
      <p>Spread the Jam is a demo website by Sam Faber-Manning</p>
      <div className='links'>

        <a href="https://github.com/Samtfm">
          <i className="fa fa-github" aria-hidden="true"></i> GitHub
          </a>
        <a href="https://www.linkedin.com/in/sam-faber-manning/">
          <i className="fa fa-linkedin" aria-hidden="true"></i> LinkedIn
        </a>
      </div>
    </div>
  </div>
);

export default App;
