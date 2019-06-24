import * as types from './actionTypes';

export const getAllUserBoards = (boards) => {
  return { type: types.GET_ALL_USER_BOARDS, payload: boards };
};
