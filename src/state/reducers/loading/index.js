import * as types from '../../actions/loading/actionTypes';

export const loadingReducer = (state = { isLoading: false }, action) => {
  switch (action.type) {
    case types.SET_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};
