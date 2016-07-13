import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import App from './components/App';

// const reducer = combineReducers(Object.assign({}, bungeeBooks, {
//   routing: routerReducer
// }));

import bungeBooksReducer from './reducer/bungee-books-reducer';

const store = createStore(
  bungeBooksReducer,
  applyMiddleware(
    createLogger()
  )
);

// const history = syncHistoryWithStore(browserHistory, store);
// <Router history={history}>
// <Route path="/" component={Root}>

ReactDOM.render(
<Provider store={store}>
  <App saludo="Juan" >
    <ul>
      <li>Hola mundo</li>
      <li>Hola feos</li>
    </ul>
  </App>
</Provider>, document.querySelector('#app'));
