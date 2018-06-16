import initialState from './InitialState';

export const AuthReducer = (state = initialState.login, action) => {
 switch (action.type) {
  case 'SIMPLE_ACTION':
   return {
    result: action.payload
   }
  default:
   return state
 }
}
