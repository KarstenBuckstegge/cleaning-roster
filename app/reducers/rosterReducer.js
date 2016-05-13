import actionTypes from '../actions/actionTypes';

const initialState = [
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
];

export default function rosterReducer(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.INCREASE_DUTY:
      return state.map((roommate) => {
        const roomie = roommate;
        if (roommate.name === action.payload.roommate) {
          roomie.duties[action.payload.duty]++;
        }
        return roomie;
      });
    default:
      return state;
  }
}
