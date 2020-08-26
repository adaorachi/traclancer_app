import { GET_PROJECT_CATEGORIES } from './types';

export const getProjectCatSuccess = (projectCatData) => {
  return {
    type: GET_PROJECT_CATEGORIES,
    payload: projectCatData,
  }
}