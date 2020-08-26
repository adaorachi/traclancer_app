import { getProjectCatSuccess } from '../actions/projectCatAction';
import axios from 'axios';

export const getProjectCatData = () => {
  return (dispatch) => {
    return axios
      .get('http://localhost:3001/api/v1/project_categories/1',
        { withCredentials: true }
      ).then(response => {
        dispatch(getProjectCatSuccess(response.data.data))
        console.log(response)
      }).catch(error => {
        // console.log(error)
      })
  }
}