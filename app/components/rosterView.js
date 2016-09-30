import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

import React, { PropTypes, } from 'react';

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
    paddingBottom: 10,
  },
});

const RosterView = props => (
    <View style={styles.container}>
      {
        props.roster.map((roommate) => {
          return (
            <View
              style={styles.roommate}
              key={roommate.name}
            >
              <Text style={styles.name}>
                {roommate.name}
              </Text>

              <TouchableHighlight
                onPress={() => {props.increaseDuty(roommate.name, 'bathroom');}}
              >
                <Text style={styles.duty}>
                  Bad: {roommate.duties.bathroom}
                </Text>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() => {props.increaseDuty(roommate.name, 'kitchen');}}
              >
                <Text style={styles.duty}>
                  Küche: {roommate.duties.kitchen}
                </Text>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() => {props.increaseDuty(roommate.name, 'hall');}}
              >
                <Text style={styles.duty}>
                  Flur: {roommate.duties.hall}
                </Text>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() => {props.increaseDuty(roommate.name, 'trash');}}
              >
                <Text style={styles.duty}>
                  Müll: {roommate.duties.trash}
                </Text>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() => {props.increaseDuty(roommate.name, 'paper');}}
              >
                <Text style={styles.duty}>
                  Papier: {roommate.duties.paper}
                </Text>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() => {props.increaseDuty(roommate.name, 'glas');}}
              >
                <Text style={styles.duty}>
                  Alt-Glas: {roommate.duties.glas}
                </Text>
              </TouchableHighlight>
            </View>
          );
        })
      }
    </View>
);

RosterView.propTypes = {
  roster: PropTypes.array,
  increaseDuty: PropTypes.func,
};
export default RosterView;
