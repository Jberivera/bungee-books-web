import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import Root from './components/Root/Root';
import App from './components/App';

import bungeeBooks from './reducer/bungee-books-reducer';

const reducer = combineReducers(Object.assign({}, bungeeBooks, {
  routing: routerReducer
}));

import bungeBooksReducer from './reducer/bungee-books-reducer';

const store = createStore(
  reducer,
  applyMiddleware(
    createLogger()
  )
);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
<Provider store={store}>
  <Router history={history}>
    <Route path="/" component={Root}>
      <Route path="/hola" component={App}></Route>
    </Route>
  </Router>
</Provider>, document.querySelector('#app'));
