import { GET_USER } from '../actions/types';

export default function userReducer(state = { status: 'not_logged_in', logged_in: false }, action) {
  switch (action.type) {
    case GET_USER:
      return action.payload;
    default:
      return state;
  }
}
