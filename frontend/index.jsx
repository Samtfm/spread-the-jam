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


  let store;
  if (window.currentUserData){

    // const user = window.currentUserData.user;
    // console.log(window.currentUserData);
    // const preloadedState = { session: { currentUser: user.id}, users: {} };
    // preloadedState.users[user.id] = user;
    // const preloadedState = { session: {currentUser: user.id}};
    // store = configureStore(preloadedState);

    //TODO: revert bootstrapping to original?
    store = configureStore();
    store.dispatch(receiveCurrentUser(window.currentUserData));
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  //TODO: remove store from window! (debugger console.log)
  window.store = store;

  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, rootEl);
});
