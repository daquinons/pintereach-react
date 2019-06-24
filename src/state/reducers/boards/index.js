import { BOARDS_URL } from '../../../api';
import * as types from '../../actions/boards/actionTypes';
import * as authUtils from '../../../utils/auth';

export const boardsReducer = (state = { boards: [] }, action) => {
  switch (action.type) {
    case types.GET_ALL_USER_BOARDS:
      return { ...state, boards: action.payload };
    default:
      return state;
  }
};

export const loadUserBoards = boards => {
  return {
    type: types.GET_ALL_USER_BOARDS,
    payload: boards
  };
};

export const getAllUserBoards = userId => async dispatch => {
  try {
    const response = await authUtils
      .axiosAuth()
      .get(BOARDS_URL + String(userId));
    dispatch(loadUserBoards(response.data));
  } catch (error) {
    console.log(error);
  }
};
