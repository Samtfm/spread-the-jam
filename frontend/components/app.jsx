import React from 'react';
import { Route } from 'react-router-dom';

import SessionFormContainer from './session_form_container';
const App = () => (
  <div>
    <h1>let's spread some JAM</h1>
    <Route path='/' component={SessionFormContainer} />
  </div>
);

export default App;
