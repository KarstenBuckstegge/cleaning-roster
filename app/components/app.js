import React, { PropTypes, } from 'react';
import { Router, Scene, } from 'react-native-router-flux';

import LoadingView from './LoadingView';
import LoginView from './LoginView';
import MyStatusView from './MyStatusView';
import RosterView from './RosterView';

const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene
          key="loading"
          component={LoadingView}
          title="loading"
          initial
        />
        <Scene
          key="login"
          component={LoginView}
          title="WhoAreYou"
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
};
App.propTypes = {
  currentRoommate: PropTypes.string,
};

export default App;
