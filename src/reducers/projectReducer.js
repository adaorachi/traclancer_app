import {
  GET_PROJECT_CATEGORIES,
  GET_CATEGORY_PROJECTS,
  GET_PROJECT_DETAIL,
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

export {
  projectCatReducer,
  catProjectsReducer,
  projectDetailReducer,
};
