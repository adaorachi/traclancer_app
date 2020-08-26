import { combineReducers } from 'redux';
import userReducer from './userReducer';
import projectCatReducer from './projectCatReducer';

export default combineReducers({
  userData: userReducer,
  projectCatData: projectCatReducer,
})