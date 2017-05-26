import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import { receiveCurrentUser } from './actions/session_actions';

import App from './components/app';
import configureStore from './store/store';

const Root = ({store}) => (
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);

document.addEventListener('DOMContentLoaded', () => {
 // bootstrap!
  const store = configureStore();
  if (window.currentUserData){
    store.dispatch(receiveCurrentUser(window.currentUserData));
    delete window.currentUserData;
  }

  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, rootEl);
});
