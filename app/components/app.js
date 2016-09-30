// import ReactNative from 'react-native';

import React, { PropTypes, } from 'react';

import { bindActionCreators, } from 'redux';
import { connect, } from 'react-redux';
import { Router, Scene, } from 'react-native-router-flux';

import { setCurrentRoommate, increaseDuty, } from '../actions/rosterActions';

import LoginView from './LoginView';
import RosterView from './rosterView';

function App(props) {
  return (
    <Router>
      <Scene key="root">
        <Scene
          key="login"
          component={LoginView}
          title="WhoAreYou"
          initial

          setCurrentRoommate={props.setCurrentRoommate}
        />
        <Scene
          key="roster"
          component={RosterView}
          title="Roster"

          roster={props.state.roster}
          increaseDuty={props.increaseDuty}
        />
      </Scene>
    </Router>
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
