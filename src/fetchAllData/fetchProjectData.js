/* eslint-disable no-console */
import axios from 'axios';
import {
  getProjectCatSuccess,
  getCategoryProjectSuccess,
  getProjectDetailSuccess,
  getAllClaimedProjectSuccess,
  getProjectStagesSuccess,
} from '../actions/projectAction';

// const url = 'https://enigmatic-retreat-81755.herokuapp.com/api/v1/';
const url = 'http://localhost:3001/api/v1/';
const token = localStorage.getItem('token');
const headers = {
  Authorization: `Bearer ${token}`,
};
export const getProjectCatData = () => dispatch => {
  if (token) {
    axios
      .get(`${url}project_categories`,
        { headers }).then(response => {
        dispatch(getProjectCatSuccess(response.data.data));
      }).catch(() => {
        dispatch(getProjectCatSuccess([]));
      });
  }
};

export const getCategoryProjectsData = projectSlug => dispatch => {
  if (token) {
    axios
      .get(`${url}project_categories/${projectSlug}`,
        { headers }).then(response => {
        dispatch(getCategoryProjectSuccess([response.data.data]));
      }).catch(() => {
        dispatch(getCategoryProjectSuccess([]));
      });
  }
};

export const getProjectDetail = projectId => dispatch => {
  if (token) {
    axios
      .get(`${url}projects/${projectId}`,
        { headers }).then(response => {
        dispatch(getProjectDetailSuccess([response.data.data]));
      }).catch(() => {
        dispatch(getProjectDetailSuccess([]));
      });
  }
};

export const createClaimedProject = obj => {
  if (token) {
    axios.post(`${url}claimed_projects`,
      obj,
      { headers }).then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    });
  }
};

export const createProjectStage = obj => {
  if (token) {
    axios.post(`${url}project_stages`,
      obj,
      { headers }).then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    });
  }
};

export const updateProjectClaimed = id => {
  if (token) {
    axios.patch(`${url}projects/${id}`,
      { headers }).then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    });
  }
};

export const getAllUserClaimedProject = () => dispatch => {
  if (token) {
    axios.get(`${url}claimed_projects`,
      { headers }).then(response => {
      dispatch(getAllClaimedProjectSuccess(response.data.data));
      console.log(response);
    }).catch(error => {
      console.log(error);
    });
  }
};

export const getProjectStages = id => dispatch => {
  if (token) {
    axios.get(`${url}claimed_projects/${id}`,
      { headers }).then(response => {
      dispatch(getProjectStagesSuccess(response.data.data));
      console.log(response.data.data);
    }).catch(error => {
      console.log(error);
    });
  }
};

export const createClaimedProjectStats = obj => {
  if (token) {
    axios.post(`${url}claimed_project_stats`,
      obj,
      { headers }).then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    });
  }
};

export const updateClaimedProjectStats = obj => {
  if (token) {
    axios.patch(`${url}claimed_project_stats/1`,
      obj,
      { headers }).then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    });
  }
};
