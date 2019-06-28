import { BOARDS_URL, ARTICLES_URL } from '../../../api';
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
    payload: boards.boards
  };
};

export const getAllUserBoards = userId => async dispatch => {
  try {
    const response = await authUtils
      .axiosAuth()
      .get(`${BOARDS_URL}${userId}/all`);
    dispatch(loadUserBoards(response.data));
  } catch (error) {
    console.log(error);
  }
};

export const postBoard = (boardTitle, userId) => async dispatch => {
  try {
    await authUtils.axiosAuth().post(BOARDS_URL, {board_title: boardTitle, user_id: userId})
    dispatch(getAllUserBoards(userId));
  } catch (error) {
    console.log(error)
  }
}

export const deleteBoard = (boardId, userId) => async dispatch => {
  try {
    const data = await authUtils.axiosAuth().delete(`${BOARDS_URL}${boardId}`)
    console.log(data);
    dispatch(getAllUserBoards(userId));
  } catch (error) {
    console.log(error)
  }
}

export const getArticles = async boardId => {
  try {
    const response = await authUtils.axiosAuth().get(`${ARTICLES_URL}${boardId}`)
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export const postArticle = (articleLabel, articleUrl, boardId, userId) => async dispatch => {
  try {
    await authUtils.axiosAuth().post(ARTICLES_URL, {article_label: articleLabel, url: articleUrl, board_id: boardId})
    dispatch(getAllUserBoards(userId));
  } catch (error) {
    console.log(error)
  }
}

export const deleteArticle = (articleId, userId) => async dispatch => {
  try {
    await authUtils.axiosAuth().delete(`${ARTICLES_URL}${articleId}`)
    dispatch(getAllUserBoards(userId));
  } catch (error) {
    console.log(error)
  }
}
