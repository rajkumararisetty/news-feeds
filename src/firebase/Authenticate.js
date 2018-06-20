import {auth} from './Initialize';

export const signUp = async (email, password) => {
  await auth.createUserWithEmailAndPassword(email, password);
};

export const login = async (email, password) => {
  const response = await auth.signInWithEmailAndPassword(email, password);
  if (response.user) {
    return response.user;
  }
  return false;
};

export const logout = () => auth.signOut();
