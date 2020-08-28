import { getProjectCatSuccess } from '../actions/projectCatAction';
import axios from 'axios';

// const url = "https://enigmatic-retreat-81755.herokuapp.com/api/v1/";
const url = "http://localhost:3001/"
export const getProjectCatData = () => {
  return (dispatch) => {
    return axios
      .get(`${url}project_categories/1`,
        { withCredentials: true }
      ).then(response => {
        dispatch(getProjectCatSuccess(response.data.data))
        console.log(response)
      }).catch(error => {
        // console.log(error)
      })
  }
}