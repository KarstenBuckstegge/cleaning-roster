import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const ROOMMATES = [
  {
    name: 'Karsten',
    duties: {
      bathroom: 0,
      kitchen: 0,
      hall: 0,
    },
  },
  {
    name: 'David',
    duties: {
      bathroom: 0,
      kitchen: 0,
      hall: 0,
    },
  },
  {
    name: 'Flo',
    duties: {
      bathroom: 0,
      kitchen: 0,
      hall: 0,
    },
  },
  {
    name: 'Nisi',
    duties: {
      bathroom: 0,
      kitchen: 0,
      hall: 0,
    },
  },
];

class cleaningroster extends Component {
  render() {
    const roommatesViewData = [];
    ROOMMATES.forEach((roommate) => {
      roommatesViewData.push(
        <View style={styles.roommate} key={roommate.name}>
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
        </View>
      );
    });
    return (
      <View style={styles.container}>
        {roommatesViewData}
      </View>
    );
  }
}

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

AppRegistry.registerComponent('cleaningroster', () => cleaningroster);
