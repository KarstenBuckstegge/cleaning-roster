import React, { PropTypes, } from 'react';

import { Router, Scene, } from 'react-native-router-flux';

import LoginView from './LoginView';
import MyStatusView from './MyStatusView';
import RosterView from './RosterView';

const App = props => {
  return (
    <Router>
      <Scene key="root">
        <Scene
          key="login"
          component={LoginView}
          title="WhoAreYou"
          initial={!props.currentRoommate}
        />
        <Scene
          key="myStatus"
          component={MyStatusView}
          title="MyStatus"
          initial={props.currentRoommate}
          currentRoommate={props.currentRoommate}
        />
        <Scene
          key="roster"
          component={RosterView}
          title="Roster"
        />
      </Scene>
    </Router>
  );
};
App.propTypes = {
  currentRoommate: PropTypes.string,
};

export default App;
