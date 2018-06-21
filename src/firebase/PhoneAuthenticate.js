import { firebase, auth } from './Initialize';

export const sendOtp = async (phoneNumber) => {
  if (!window.recaptchaVerifier) {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('login-in-button', {
      'size': 'invisible'
    });
  }
  return await auth.signInWithPhoneNumber(phoneNumber, window.recaptchaVerifier);

};

export const submitOpt = async (opt, confirmationResult) => {
  await confirmationResult.confirm(opt);
  delete window.recaptchaVerifier;
};
