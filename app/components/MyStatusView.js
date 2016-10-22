import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

import React, { PropTypes, } from 'react';
import { bindActionCreators, } from 'redux';
import { connect, } from 'react-redux';
import { Actions, } from 'react-native-router-flux';

import { increaseDuty, } from '../actions/rosterActions';
import { common as commonStyles, } from '../styles.js';

const styles = StyleSheet.create(commonStyles);

const MyStatusView = props => (
    <View style={styles.container}>
      <Text style={styles.headline}>
        {`Moinsen ${props.currentRoommate}`}
      </Text>
      {
        props.roster.map((roommate) => {
          if (roommate.name === props.currentRoommate) {
            return (
              <View
                key={roommate.name}
              >
              <Text>
                {'Was hast du heute erledigt?'}
              </Text>

              <TouchableHighlight
                onPress={() => {props.increaseDuty(roommate.name, 'bathroom');}}
                style={styles.button}
              >
                <Text>
                  Bad: {roommate.duties.bathroom}
                </Text>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() => {props.increaseDuty(roommate.name, 'kitchen');}}
                style={styles.button}
              >
                <Text>
                  Küche: {roommate.duties.kitchen}
                </Text>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() => {props.increaseDuty(roommate.name, 'hall');}}
                style={styles.button}
              >
                <Text>
                  Flur: {roommate.duties.hall}
                </Text>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() => {props.increaseDuty(roommate.name, 'trash');}}
                style={styles.button}
              >
                <Text>
                  Müll: {roommate.duties.trash}
                </Text>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() => {props.increaseDuty(roommate.name, 'paper');}}
                style={styles.button}
              >
                <Text>
                  Papier: {roommate.duties.paper}
                </Text>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() => {props.increaseDuty(roommate.name, 'glas');}}
                style={styles.button}
              >
                <Text>
                  Alt-Glas: {roommate.duties.glas}
                </Text>
              </TouchableHighlight>
              </View>
            );
          }
          return null;
        })
      }
      <TouchableHighlight
        onPress={() => {Actions.roster();}}
      >
        <Text>
          Was machen die anderen denn so?
        </Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => {Actions.login();}}
      >
        <Text>
          {`Seh ich aus wie 1 ${props.currentRoommate}??`}
        </Text>
      </TouchableHighlight>
    </View>
);

MyStatusView.propTypes = {
  currentRoommate: PropTypes.string,
  roster: PropTypes.array,
  increaseDuty: PropTypes.func,
};

const stateToProps = (state) => {
  return {
    currentRoommate: state.currentRoommate,
    roster: state.roster,
  };
};

const dispatchToProps = (dispatch) => (
  bindActionCreators({
    increaseDuty,
  }, dispatch)
);

export default connect(stateToProps, dispatchToProps)(MyStatusView);
