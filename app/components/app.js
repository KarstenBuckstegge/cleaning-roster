import React, {
  PropTypes,
  AsyncStorage,
} from 'react-native';

import { bindActionCreators, } from 'redux';
import { connect, } from 'react-redux';

import { setCurrentRoommate, increaseDuty, } from '../actions/rosterActions';

import LoadingView from './LoadingView';
import LoginView from './LoginView';
import RosterView from './rosterView';

export default function App(props) {
  // return (
  //   <RosterView
  //     roster={props.state.roster}
  //     increaseDuty={props.increaseDuty}
  //   />
  // );

  return (
    <LoginView
      setCurrentRoommate={props.setCurrentRoommate}
    />
  );
}

const stateToProps = (state) => {
  return {
    state,
  };
};

const dispatchToProps = (dispatch) => (
  bindActionCreators({
    setCurrentRoommate,
    increaseDuty,
  }, dispatch)
);

App.propTypes = {
  state: PropTypes.object,
  setCurrentRoommate: PropTypes.func,
  increaseDuty: PropTypes.func,
};

export default connect(stateToProps, dispatchToProps)(App);
