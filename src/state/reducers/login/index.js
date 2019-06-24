import axios from 'axios';
import { LOGIN_URL } from '../../../api/';
import * as types from '../../actions/login/actionTypes';

export const loginReducer = (state = { token: undefined }, action) => {
  switch (action.type) {
    case types.SET_TOKEN:
      return { ...state, token: action.payload };
    default:
      return state;
  }
};

const setToken = (token) => {
  return {
    type: types.SET_TOKEN,
    payload: token
  }
}

export const login = (username, password) => dispatch => {
  axios
    .post(LOGIN_URL, { username, password })
    .then(res => {
      dispatch(setToken(res.data.token));
    })
    .catch(error => {
      console.log(error);
    });
};
