import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import React, { PropTypes, } from 'react';
import { connect, } from 'react-redux';

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

              <Text style={styles.duty}>
                Bad: {roommate.duties.bathroom}
              </Text>

              <Text style={styles.duty}>
                Küche: {roommate.duties.kitchen}
              </Text>

              <Text style={styles.duty}>
                Flur: {roommate.duties.hall}
              </Text>

              <Text style={styles.duty}>
                Müll: {roommate.duties.trash}
              </Text>

              <Text style={styles.duty}>
                Papier: {roommate.duties.paper}
              </Text>

              <Text style={styles.duty}>
                Alt-Glas: {roommate.duties.glas}
              </Text>
            </View>
          );
        })
      }
    </View>
);

const stateToProps = (state) => {
  return {
    roster: state.roster,
  };
};

RosterView.propTypes = {
  roster: PropTypes.array,
};
export default connect(stateToProps)(RosterView);
