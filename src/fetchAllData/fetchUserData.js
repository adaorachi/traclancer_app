import axios from 'axios';
import { getUserSuccess } from '../actions/userAction';

// const url = "https://enigmatic-retreat-81755.herokuapp.com/api/v1/";
const url = 'http://localhost:3001/api/v1/';
export const getUserData = (userData, isSignUp = true) => {
  // const endPoint = (isSignUp) ? `${url}registrations` : `${url}sessions`;
  const endPoint = `${url}login`;
  return dispatch => axios
    .post(endPoint,
      { user: userData },
      { withCredentials: true }).then(response => {
      dispatch(getUserSuccess(response.data));
      console.log(response.data.jwt, 'mk');
      localStorage.setItem('token', response.data.jwt);
    }).catch(error => {
      console.log(error);
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
        console.log(response);
        dispatch(getUserSuccess(response.data));
      }).catch(error => {
        // console.log(error)
      });
  }
};
