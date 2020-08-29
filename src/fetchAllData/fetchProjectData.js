import axios from 'axios';
import {
  getProjectCatSuccess,
  getCategoryProjectSuccess,
  getProjectDetailSuccess,
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
