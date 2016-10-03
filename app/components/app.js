import React, { PropTypes, } from 'react';

import { Router, Scene, } from 'react-native-router-flux';

import LoginView from './LoginView';
import MyStatusView from './MyStatusView';
import RosterView from './RosterView';

function App() {
  return (
    <Router>
      <Scene key="root">
        <Scene
          key="login"
          component={LoginView}
          title="WhoAreYou"
          initial
        />
        <Scene
          key="myStatus"
          component={MyStatusView}
          title="MyStatus"
        />
        <Scene
          key="roster"
          component={RosterView}
          title="Roster"
        />
      </Scene>
    </Router>
  );
}

App.propTypes = {
  state: PropTypes.object,
  setCurrentRoommate: PropTypes.func,
  increaseDuty: PropTypes.func,
};

export default App;
