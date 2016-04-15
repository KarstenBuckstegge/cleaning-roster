import React, {
  StyleSheet,
  View,
  PropTypes,
} from 'react-native';

import { bindActionCreators, } from 'redux';
import { connect, } from 'react-redux';

import rosterReducer from '../reducers/rosterReducer';

import RosterView from './rosterView';

export default function App(props) {
  return (
    <View style={styles.container}>
      <RosterView roster={props.roster} />
    </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  roommate: {
    flex: 0.5,
    padding: 10,
    backgroundColor: '#BADA55',
  },
  name: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  duty: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default connect(stateToProps, dispatchToProps)(App);
