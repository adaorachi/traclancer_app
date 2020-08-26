import { GET_USER } from './types';

export const getUserSuccess = (userData) => {
  return {
    type: GET_USER,
    payload: userData,
  }
}