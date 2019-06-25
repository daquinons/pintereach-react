import { combineReducers } from 'redux';
import { authReducer } from './auth';
import { boardsReducer } from './boards';

export default combineReducers({
  auth: authReducer,
  boards: boardsReducer
});
