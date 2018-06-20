import { firebase, auth } from './Initialize';

export const sendOtp = async (phoneNumber) => {
  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('login-in-button', {
    'size': 'invisible'
  });

  try {
    return await auth.signInWithPhoneNumber(phoneNumber, window.recaptchaVerifier);
  } catch (error) {
    // window.recaptchaVerifier.render().then(function(widgetId) {
    //   grecaptcha.reset(widgetId);
    // });
    throw error;
  }

};

export const submitOpt = async (opt, confirmationResult) => {
  await confirmationResult.confirm(opt);
};
