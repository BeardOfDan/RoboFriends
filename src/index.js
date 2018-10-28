import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { searchRobots, requestRobots } from './reducers';

import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import 'tachyons';

const rootReducer = combineReducers({ searchRobots, requestRobots });

// store is declared as a var to fix scope issue
if (process.env.NODE_ENV !== 'production') { // use a logger
  const logger = createLogger();
  var store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));
} else {
  // eslint thinks store is being redefined
  // eslint-disable-next-line
  var store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
