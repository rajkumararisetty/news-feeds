import initialState from './InitialState';
import { SET_CURRENT_USER, LOG_OUT, LOG_IN_FAILURE } from '../actions/ActionTypes';

export const AuthReducer = (state = initialState.login, action) => {
 switch (action.type) {
  case 'SET_CURRENT_USER':
    const user = {email: action.user.email, userId: action.user.uid};
    return Object.assign({}, state, {isAuthenticated: true, user: user});

  case 'LOG_OUT':
   return Object.assign({}, state, {isAuthenticated: false, user: {}});

  default:
   return state
 }
}
