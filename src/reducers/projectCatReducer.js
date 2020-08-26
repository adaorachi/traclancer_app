import { GET_PROJECT_CATEGORIES } from '../actions/types';

export default function projectCatReducer(state=[], action) {
  switch(action.type) {
    case GET_PROJECT_CATEGORIES:
      return action.payload;
    default:
      return state;
  }
}