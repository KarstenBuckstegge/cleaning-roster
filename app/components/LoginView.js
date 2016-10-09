import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

import React, { PropTypes, } from 'react';
import { bindActionCreators, } from 'redux';
import { connect, } from 'react-redux';

import { setCurrentRoommate, } from '../actions/rosterActions';
import { common as commonStyles, } from '../styles.js';

const styles = StyleSheet.create(commonStyles);

const LoginView = props => (
    <View style={styles.container}>
      <Text style={styles.headline}>Wer bist du??</Text>
      <View sytle={styles.buttonContainer}>
        <TouchableHighlight
          onPress={() => {props.setCurrentRoommate('David');}}
          style={styles.button}
        >
        <Text>David</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {props.setCurrentRoommate('Nisi');}}
          style={styles.button}
        >
        <Text>Nisi</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {props.setCurrentRoommate('Flo');}}
          style={styles.button}
        >
        <Text>Flo</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {props.setCurrentRoommate('Karsten');}}
          style={styles.button}
        >
        <Text>Karsten</Text>
        </TouchableHighlight>
      </View>
    </View>
);

const stateToProps = (state) => {
  return {
    state,
  };
};

const dispatchToProps = (dispatch) => (
  bindActionCreators({
    setCurrentRoommate,
  }, dispatch)
);

LoginView.propTypes = {
  state: PropTypes.object,
  setCurrentRoommate: PropTypes.func,
};
export default connect(stateToProps, dispatchToProps)(LoginView);
