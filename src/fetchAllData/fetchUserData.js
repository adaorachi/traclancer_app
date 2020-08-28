import { getUserSuccess } from '../actions/userAction';
import axios from 'axios';

// const url = "https://enigmatic-retreat-81755.herokuapp.com/api/v1/";
const url = "http://localhost:3001/api/v1/"
export const getUserData = (userData, isSignUp=true) => {
  let endPoint;
  endPoint = (isSignUp) ? `${url}registrations` : `${url}sessions`;
  return (dispatch) => {
    return axios
      .post(endPoint,
        { user: userData },
        { withCredentials: true }
      ).then(response => {
        dispatch(getUserSuccess(response.data))
        console.log(response.data)
      }).catch(error => {
        // console.log(error)
      })
  }
}

export const isUserLoggedIn = () => {
  return (dispatch) => {
    return axios
      .get(`${url}logged_in`,
        { withCredentials: true }
      ).then(response => {
        console.log(response)
        dispatch(getUserSuccess(response.data))
      }).catch(error => {
        // console.log(error)
      })
  }
}
