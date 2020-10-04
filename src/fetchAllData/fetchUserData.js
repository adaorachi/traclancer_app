/* eslint-disable no-unused-vars */
import axios from 'axios';
import { getUserSuccess } from '../actions/userAction';

const url = 'https://ancient-ocean-05868.herokuapp.com/api/v1/';
export const getUserData = (userData, isSignUp = true) => {
  const endPoint = (isSignUp) ? `${url}registrations` : `${url}login`;
  return dispatch => axios
    .post(endPoint,
      { user: userData }).then(response => {
      dispatch(getUserSuccess(response.data));
      console.log(response.data);
      localStorage.setItem('token', response.data.jwt);
    }).catch(error => {
    });
};

const token = localStorage.getItem('token');
const headers = {
  Authorization: `Bearer ${token}`,
};

export const isUserLoggedIn = () => dispatch => {
  if (token) {
    axios
      .get(`${url}logged_in`,
        { headers }).then(response => {
        dispatch(getUserSuccess(response.data));
      }).catch(error => {
      });
  }
};
