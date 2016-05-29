import actionTypes from '../actions/actionTypes';

export const setCurrentRoommate = (roommate) => (
  {
    type: actionTypes.SET_CURRENT_ROOMMATE,
    payload: { roommate, },
  }
);

export const increaseDuty = (roommate, duty) => (
  {
    type: actionTypes.INCREASE_DUTY,
    payload: { roommate, duty, },
  }
);
