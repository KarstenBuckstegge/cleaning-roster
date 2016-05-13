import actionTypes from '../actions/actionTypes';

export const increaseDuty = (roommate, duty) => (
  {
    type: actionTypes.INCREASE_DUTY,
    payload: { roommate, duty, },
  }
);
