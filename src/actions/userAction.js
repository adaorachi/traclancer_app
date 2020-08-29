import { GET_USER } from './types';

const getUserSuccess = userData => ({
  type: GET_USER,
  payload: userData,
});

export { getUserSuccess };
