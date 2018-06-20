import { SET_CURRENT_USER, LOG_OUT, LOG_IN_FAILURE } from './ActionTypes';
import * as Authenticate from '../firebase/Authenticate';
import * as PhoneAuthenticate from '../firebase/PhoneAuthenticate';

export const setCurrentUser = (user) => (
  { type: SET_CURRENT_USER, user }
);

function logInFailureSuccess() {
  return {
    type: LOG_IN_FAILURE
  };
}

export const logOutAction = () => (
  { type: LOG_OUT }
);

export const login = (emailId, password) => (
  async (dispatch) => {
    try {
      const user = await Authenticate.login(emailId, password);
      dispatch(setCurrentUser(user));
      return true;
    } catch(error) {
      throw error;
    }
  }
);

export const logout = () => (
  async (dispatch) => {
    try {
      await Authenticate.logout();
      dispatch(logOutAction());
      return true;
    } catch(error) {
      console.log(error);
    }
  }
);


export const signUp = (emailId, password) => (
  async (dispatch) => {
      await Authenticate.signUp(emailId, password);
      return true;
  }
);

export const phoneNumberVerify = (phoneNumber) => (
  async (dispatch) => {
    return await PhoneAuthenticate.sendOtp(phoneNumber);
  }
);

export const submitOpt = (opt, confirmationResult) => (
  async (dispatch) => {
    await PhoneAuthenticate.submitOpt(opt, confirmationResult);
    return true;
  }
);