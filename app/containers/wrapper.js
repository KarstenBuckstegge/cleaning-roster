import React from 'react-native';

import { createStore, } from 'redux';
import { Provider, } from 'react-redux';

import App from '../components/app';
import rosterReducer from '../reducers/rosterReducer';

const store = createStore(rosterReducer);

export default function Wrapper() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
