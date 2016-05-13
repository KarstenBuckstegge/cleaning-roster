import React from 'react-native';

import { applyMiddleware, createStore, } from 'redux';
import { Provider, } from 'react-redux';
import createLogger from 'redux-logger';

import App from '../components/app';
import rosterReducer from '../reducers/rosterReducer';

const logger = createLogger();
const store = applyMiddleware(logger)(createStore)(rosterReducer);

export default function Wrapper() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
