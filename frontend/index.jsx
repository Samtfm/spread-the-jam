import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

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


  let store;
  if (window.currentUser){

    const preloadedState = { session: { currentUser: window.currentUser.id }, users: {} };
    preloadedState.users[window.currentUser.id] = window.currentUser;
    //TODO: revert bootstrapping to original?
    store = configureStore(preloadedState);
    console.log(window.currentUser);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  //TODO: remove store from window! (debugger console.log)
  window.store = store;

  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, rootEl);
});
