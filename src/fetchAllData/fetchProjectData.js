import axios from 'axios';
import {
  getProjectCatSuccess,
  getCategoryProjectSuccess,
  getProjectDetailSuccess,
  getAllClaimedProjectSuccess,
  getProjectStagesSuccess,
} from '../actions/projectAction';

const url = 'http://localhost:3001/api/v1/';
export const getProjectCatData = () => dispatch => axios
  .get(`${url}project_categories`,
    { withCredentials: true }).then(response => {
    dispatch(getProjectCatSuccess(response.data.data));
  }).catch(() => {
    dispatch(getProjectCatSuccess([]));
  });

export const getCategoryProjectsData = projectSlug => dispatch => axios
  .get(`${url}project_categories/${projectSlug}`,
    { withCredentials: true }).then(response => {
    dispatch(getCategoryProjectSuccess([response.data.data]));
  }).catch(() => {
    dispatch(getCategoryProjectSuccess([]));
  });

export const getProjectDetail = projectId => dispatch => axios
  .get(`${url}projects/${projectId}`,
    { withCredentials: true }).then(response => {
    dispatch(getProjectDetailSuccess([response.data.data]));
  }).catch(() => {
    dispatch(getProjectDetailSuccess([]));
  });

export const createClaimedProject = obj => {
  axios.post(`${url}claimed_projects`,
    obj,
    { withCredentials: true }).then(response => {
    console.log(response);
  }).catch(error => {
    console.log(error);
  });
};

export const createProjectStage = obj => {
  axios.post(`${url}project_stages`,
    obj,
    { withCredentials: true }).then(response => {
    console.log(response);
  }).catch(error => {
    console.log(error);
  });
};


export const updateProjectClaimed = id => {
  axios.patch(`${url}projects/${id}`,
    { withCredentials: true }).then(response => {
    console.log(response);
  }).catch(error => {
    console.log(error);
  });
};

export const getAllUserClaimedProject = () => dispatch => {
  axios.get(`${url}claimed_projects`,
    { withCredentials: true }).then(response => {
    dispatch(getAllClaimedProjectSuccess(response.data.data));
    console.log(response);
  }).catch(error => {
    console.log(error);
  });
};

export const getProjectStages = id => dispatch => {
  axios.get(`${url}claimed_projects/${id}`,
    { withCredentials: true }).then(response => {
    dispatch(getProjectStagesSuccess(response.data.data));
    console.log(response.data.data);
  }).catch(error => {
    console.log(error);
  });
};
