import { SET_CURRENT_USER, LOG_OUT, LOG_IN_FAILURE } from './ActionTypes';
import * as Authenticate from '../firebase/Authenticate';

export const setCurrentUser = (user) => (
  { type: SET_CURRENT_USER, user }
);

function logInFailureSuccess() {
  return {
    type: LOG_IN_FAILURE
  };
}

export const logOutSuccess = () => (
  { type: LOG_OUT }
);

export const login = (emailId, password) => (
  async (dispatch) => {
    try {
      const user = await Authenticate.login(emailId, password);
      dispatch(setCurrentUser(user));
      return true;
    } catch(error) {
      console.log(error);
    }
  }
)

// export function logOut() {
//   return function (dispatch) {
//     setFlashMsgCookies('Your are successfully logged out!!');
//     dispatch(logOutSuccess());
//   }
// }
