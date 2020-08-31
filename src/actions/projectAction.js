import {
  GET_PROJECT_CATEGORIES,
  GET_CATEGORY_PROJECTS,
  GET_PROJECT_DETAIL,
  GET_ALL_CLAIMED_PROJECTS,
  GET_PROJECT_STAGES,
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

const getAllClaimedProjectSuccess = allClaimedProject => ({
  type: GET_ALL_CLAIMED_PROJECTS,
  payload: allClaimedProject,
});

const getProjectStagesSuccess = allProjectStage => ({
  type: GET_PROJECT_STAGES,
  payload: allProjectStage,
});

export {
  getProjectCatSuccess,
  getCategoryProjectSuccess,
  getProjectDetailSuccess,
  getAllClaimedProjectSuccess,
  getProjectStagesSuccess,
};
