import * as types from './actionTypes';

export const setLoading = isLoading => {
  return { type: types.SET_LOADING, payload: isLoading };
};
