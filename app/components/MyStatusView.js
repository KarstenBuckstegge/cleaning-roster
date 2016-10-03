import {
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

import React, { PropTypes, } from 'react';
import { bindActionCreators, } from 'redux';
import { connect, } from 'react-redux';

import { Actions, } from 'react-native-router-flux';

import { increaseDuty, } from '../actions/rosterActions';

const MyStatusView = props => (
    <View>
    <Text>
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
                {'Deine Statistiken'}
              </Text>

              <TouchableHighlight
                onPress={() => {props.increaseDuty(roommate.name, 'bathroom');}}
              >
                <Text>
                  Bad: {roommate.duties.bathroom}
                </Text>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() => {props.increaseDuty(roommate.name, 'kitchen');}}
              >
                <Text>
                  Küche: {roommate.duties.kitchen}
                </Text>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() => {props.increaseDuty(roommate.name, 'hall');}}
              >
                <Text>
                  Flur: {roommate.duties.hall}
                </Text>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() => {props.increaseDuty(roommate.name, 'trash');}}
              >
                <Text>
                  Müll: {roommate.duties.trash}
                </Text>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() => {props.increaseDuty(roommate.name, 'paper');}}
              >
                <Text>
                  Papier: {roommate.duties.paper}
                </Text>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() => {props.increaseDuty(roommate.name, 'glas');}}
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
    </View>
);

MyStatusView.propTypes = {
  currentRoommate: PropTypes.string,
  roster: PropTypes.array,
  increaseDuty: PropTypes.func,
};

const stateToProps = (state) => {
  return {
    roster: state.roster,
  };
};

const dispatchToProps = (dispatch) => (
  bindActionCreators({
    increaseDuty,
  }, dispatch)
);

export default connect(stateToProps, dispatchToProps)(MyStatusView);
