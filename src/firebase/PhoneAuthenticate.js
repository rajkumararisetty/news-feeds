import { firebase, auth } from './Initialize';

export const sendOtp = async (phoneNumber) => {
  try {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('login-in-button', {
        'size': 'invisible'
      });
      window.recaptchaWidgetId = await window.recaptchaVerifier.render();
    }
    return await auth.signInWithPhoneNumber(phoneNumber, window.recaptchaVerifier);
  } catch (error) {
    window.grecaptcha.reset(window.recaptchaWidgetId);
    throw error;
  }

};

export const submitOpt = async (opt, confirmationResult) => {
  await confirmationResult.confirm(opt);
  window.grecaptcha.reset();
};
