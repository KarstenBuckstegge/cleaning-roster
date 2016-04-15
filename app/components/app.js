import React, {
  PropTypes,
} from 'react-native';

import { bindActionCreators, } from 'redux';
import { connect, } from 'react-redux';

import rosterReducer from '../reducers/rosterReducer';
import RosterView from './rosterView';

export default function App(props) {
  return (
    <RosterView roster={props.roster} />
  );
}

App.propTypes = {
  roster: PropTypes.array,
};

const stateToProps = (state) => {
  return {
    roster: state.roster,
  };
};

const dispatchToProps = (dispatch) => {
  return bindActionCreators({
    rosterReducer,
  }, dispatch);
};

export default connect(stateToProps, dispatchToProps)(App);
