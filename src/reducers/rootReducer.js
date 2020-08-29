import { combineReducers } from 'redux';
import userReducer from './userReducer';
import {
  projectCatReducer,
  catProjectsReducer,
  projectDetailReducer,
} from './projectReducer';

export default combineReducers({
  userData: userReducer,
  projectCatData: projectCatReducer,
  catProjectsData: catProjectsReducer,
  projectDetailData: projectDetailReducer,
});
