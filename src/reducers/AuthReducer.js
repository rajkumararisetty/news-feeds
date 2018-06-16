import initialState from './InitialState';
import { SET_CURRENT_USER, LOG_OUT, LOG_IN_FAILURE } from '../actions/ActionTypes';

export const AuthReducer = (state = initialState.login, action) => {
 switch (action.type) {
  case 'SET_CURRENT_USER':
    return Object.assign({}, state, {isAuthenticated: true, user: action.user});
  default:
   return state
 }
}
