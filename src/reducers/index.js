import { combineReducers } from 'redux';
import {reducer as toastrReducer} from 'react-redux-toastr'
import { AuthReducer } from './AuthReducer';
import { FeedReducer } from './FeedReducer';

export default combineReducers({
  toastr: toastrReducer,
  AuthReducer,
  FeedReducer
});
