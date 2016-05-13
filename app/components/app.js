import React, { PropTypes, } from 'react-native';

import { bindActionCreators, } from 'redux';
import { connect, } from 'react-redux';

import { increaseDuty, } from '../actions/rosterActions';

import RosterView from './rosterView';

export default function App(props) {
  return (
    <RosterView
      roster={props.roster}
      increaseDuty={props.increaseDuty}
    />
  );
}

const stateToProps = (state) => {
  return {
    roster: state,
  };
};

const dispatchToProps = (dispatch) => (
  bindActionCreators({
    increaseDuty,
  }, dispatch)
);

App.propTypes = {
  roster: PropTypes.array,
  increaseDuty: PropTypes.func,
};

export default connect(stateToProps, dispatchToProps)(App);
