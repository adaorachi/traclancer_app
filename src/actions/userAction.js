import { GET_USER } from './types';

const getUserSuccess = userData => ({
  type: GET_USER,
  payload: userData,
});

// eslint-disable-next-line import/prefer-default-export
export { getUserSuccess };
