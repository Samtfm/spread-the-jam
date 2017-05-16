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

  const store = configureStore();
  const rootEl = document.getElementById('root');
  window.store = store;
  ReactDOM.render(<Root store={store} />, rootEl);
});
