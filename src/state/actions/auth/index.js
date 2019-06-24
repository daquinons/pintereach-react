import * as types from './actionTypes';

export const setToken = (token) => {
  return { type: types.SET_TOKEN, payload: token };
};
