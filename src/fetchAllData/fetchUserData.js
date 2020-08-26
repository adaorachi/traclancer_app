import { getUserSuccess } from '../actions/userAction';
import axios from 'axios';

export const getUserData = (userData, isSignUp=true) => {
  let endPoint;
  endPoint = (isSignUp) ? 'http://localhost:3001/api/v1/registrations' : 'http://localhost:3001/api/v1/sessions';
  return (dispatch) => {
    return axios
      .post(endPoint,
        { user: userData },
        { withCredentials: true }
      ).then(response => {
        dispatch(getUserSuccess(response.data))
      }).catch(error => {
        // console.log(error)
      })
  }
}

export const isUserLoggedIn = () => {
  return (dispatch) => {
    return axios
      .get('http://localhost:3001/api/v1/logged_in',
        { withCredentials: true }
      ).then(response => {
        // console.log(response)
        dispatch(getUserSuccess(response.data))
      }).catch(error => {
        // console.log(error)
      })
  }
}
