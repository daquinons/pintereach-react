import axios from 'axios';
import { LOGIN_URL, REGISTER_URL } from '../../../api';
import * as types from '../../actions/auth/actionTypes';
import * as authUtils from '../../../utils/auth';

export const authReducer = (state = { token: undefined }, action) => {
  switch (action.type) {
    case types.SET_TOKEN:
      return { ...state, token: action.payload };
    default:
      return state;
  }
};

export const setToken = (token = authUtils.getToken()) => {
  authUtils.setToken(token);

  return {
    type: types.SET_TOKEN,
    payload: token
  }
}

export const login = (username, password) => dispatch => {
  axios
    .post(LOGIN_URL, { username, password })
    .then(res => {
      const token = res.data.token
      dispatch(setToken(token));
    })
    .catch(error => {
      console.log(error);
    });
};

export const createUser = async (email, username, password) => {
  try {
    const dataResponse = await axios.post(REGISTER_URL, {email, username, password});
    return dataResponse.data.message;
  } catch (error) {
    return new Error(error);
  }
}
