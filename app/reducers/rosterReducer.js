import actionTypes from '../actions/actionTypes';
import { AsyncStorage, } from 'react-native';
import { Actions, } from 'react-native-router-flux';

export const CURRENT_ROOMMATE_KEY = 'currentRoommate';

const initialState = {
  currentRoommate: '',
  roster: [
    {
      name: 'David',
      duties: {
        bathroom: 0,
        kitchen: 0,
        hall: 0,
        trash: 0,
        paper: 0,
        glas: 0,
      },
    },
    {
      name: 'Nisi',
      duties: {
        bathroom: 0,
        kitchen: 0,
        hall: 0,
        trash: 0,
        paper: 0,
        glas: 0,
      },
    },
    {
      name: 'Flo',
      duties: {
        bathroom: 0,
        kitchen: 0,
        hall: 1,
        trash: 0,
        paper: 0,
        glas: 0,
      },
    },
    {
      name: 'Karsten',
      duties: {
        bathroom: 0,
        kitchen: 0,
        hall: 0,
        trash: 0,
        paper: 0,
        glas: 0,
      },
    },
  ],
};

export default function rosterReducer(state = initialState, action = {}) {
  switch (action.type) {

    case actionTypes.LOADING_SUCCEEDED:
      Actions.myStatus({ type: 'reset', });
      return Object.assign({}, state, {
        currentRoommate: action.payload.rosterData[0],
        roster: action.payload.rosterData[1],
      });

    case actionTypes.INCREASE_DUTY:
      return Object.assign({}, state, { roster:
        state.roster.map((roommate) => {
          const roomie = roommate;
          if (roommate.name === action.payload.roommate) {
            roomie.duties[action.payload.duty]++;
          }
          return roomie;
        }),
      });

    case actionTypes.SET_CURRENT_ROOMMATE:
      AsyncStorage.setItem(CURRENT_ROOMMATE_KEY, action.payload.roommate);
      Actions.myStatus({ currentRoommate: action.payload.roommate, });
      return Object.assign({}, state, {
        currentRoommate: action.payload.roommate,
      });

    default:
      return state;
  }
}
