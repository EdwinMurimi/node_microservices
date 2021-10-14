import axios from 'axios';
import { REGISTERING_USER, REGISTERING_USER_SUCCESS, REGISTERING_USER_FAILED } from '../types';

function registeringUser() {
  return {
    type: REGISTERING_USER
  }
}

function registeringUserSuccess(user) {
  return {
    type: REGISTERING_USER_SUCCESS,
    payload: user
  }
}

function registeringUserFailed(error) {
  return {
    type: REGISTERING_USER_FAILED,
    payload: error
  }
}

export const registeringUserRequest = (userData) => (dispatch) => {
  dispatch(registeringUser());
  axios.post(`http://localhost:3000/api/users/signup`, userData)
    .then(({ data }) => dispatch(registeringUserSuccess(data)))
    .catch(({ message }) => dispatch(registeringUserFailed(message)))
}