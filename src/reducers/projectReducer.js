import {
  GET_PROJECT_CATEGORIES,
  GET_CATEGORY_PROJECTS,
  GET_PROJECT_DETAIL,
  GET_ALL_CLAIMED_PROJECTS,
  GET_PROJECT_STAGES,
} from '../actions/types';

const projectCatReducer = (state = [], action) => {
  switch (action.type) {
    case GET_PROJECT_CATEGORIES:
      return action.payload;
    default:
      return state;
  }
};

const catProjectsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_CATEGORY_PROJECTS:
      return action.payload;
    default:
      return state;
  }
};

const projectDetailReducer = (state = [], action) => {
  switch (action.type) {
    case GET_PROJECT_DETAIL:
      return action.payload;
    default:
      return state;
  }
};

const claimedProjectReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_CLAIMED_PROJECTS:
      return action.payload;
    default:
      return state;
  }
};

const projectStageReducer = (state = [], action) => {
  switch (action.type) {
    case GET_PROJECT_STAGES:
      return action.payload;
    default:
      return state;
  }
};

export {
  projectCatReducer,
  catProjectsReducer,
  projectDetailReducer,
  claimedProjectReducer,
  projectStageReducer,
};
