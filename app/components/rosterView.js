import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import React, { PropTypes, } from 'react';
import { connect, } from 'react-redux';
import {
  roster as rosterStyles,
} from '../styles.js';

const styles = StyleSheet.create(rosterStyles);

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
