import React, { PropTypes, } from 'react';
import { Text, } from 'react-native';
import { bindActionCreators, } from 'redux';
import { connect, } from 'react-redux';
import { Actions, } from 'react-native-router-flux';

import { getDataFromAsyncStorage, } from '../helpers.js';
import { loadingFromStorageSucceeded, } from '../actions/rosterActions';
import { CURRENT_ROOMMATE_KEY, } from '../reducers/rosterReducer';

const LoadingView = props => {
  getDataFromAsyncStorage(CURRENT_ROOMMATE_KEY).then(
    value => {
      if (value) {
        props.loadingFromStorageSucceeded(value);
      } else {
        Actions.login();
      }
    }
  );

  return (
    <Text>
      loading...
    </Text>
  );
};
LoadingView.propTypes = {
  loadingFromStorageSucceeded: PropTypes.func,
};

const dispatchToProps = (dispatch) => (
  bindActionCreators({
    loadingFromStorageSucceeded,
  }, dispatch)
);

export default connect(null, dispatchToProps)(LoadingView);
