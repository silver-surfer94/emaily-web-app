import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import axios from 'axios';

import App from './components/App';
import reducers from './reducers';
window.axios = axios;

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
console.log('STORE', store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);

console.log('STRIPE KEY', process.env.REACT_APP_STRIPE_KEY);
console.log('environment', process.env.NODE_ENV);
