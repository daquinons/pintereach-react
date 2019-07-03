import { combineReducers } from 'redux';
import { authReducer } from './auth';
import { boardsReducer } from './boards';
import { loadingReducer } from './loading';

export default combineReducers({
  auth: authReducer,
  boards: boardsReducer,
  loading: loadingReducer
});
