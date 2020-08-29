import {
  GET_PROJECT_CATEGORIES,
  GET_CATEGORY_PROJECTS,
  GET_PROJECT_DETAIL,
} from './types';

const getProjectCatSuccess = projectCatData => ({
  type: GET_PROJECT_CATEGORIES,
  payload: projectCatData,
});

const getCategoryProjectSuccess = catProjectData => ({
  type: GET_CATEGORY_PROJECTS,
  payload: catProjectData,
});

const getProjectDetailSuccess = projectDetail => ({
  type: GET_PROJECT_DETAIL,
  payload: projectDetail,
});

export {
  getProjectCatSuccess,
  getCategoryProjectSuccess,
  getProjectDetailSuccess,
};
