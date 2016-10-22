import React, { PropTypes, } from 'react';
import { Text, } from 'react-native';
import { bindActionCreators, } from 'redux';
import { connect, } from 'react-redux';
import { Actions, } from 'react-native-router-flux';

import { getDataFromAsyncStorage, } from '../helpers.js';
import { loadingSucceeded, } from '../actions/rosterActions';
import { CURRENT_ROOMMATE_KEY, } from '../reducers/rosterReducer';

const LoadingView = props => {
  const getCurrentRoommate = getDataFromAsyncStorage(CURRENT_ROOMMATE_KEY);

  const getRosterData = fetch('https://karsten.vulpecula.uberspace.de/data/cleaning_roster_state.json')
    .then(data => {
      return data.json();
    }).catch(err => {
      console.error('Loading of roster data failed', err);
    });

  Promise.all([getCurrentRoommate, getRosterData]).then(values => { // eslint-disable-line comma-dangle, max-len
    if (typeof values[0] !== 'string') {
      Actions.login();
    } else {
      props.loadingSucceeded(values);
    }
  });

  return (
    <Text>
      loading...
    </Text>
  );
};
LoadingView.propTypes = {
  loadingSucceeded: PropTypes.func,
};

const dispatchToProps = (dispatch) => (
  bindActionCreators({
    loadingSucceeded,
  }, dispatch)
);

export default connect(null, dispatchToProps)(LoadingView);
