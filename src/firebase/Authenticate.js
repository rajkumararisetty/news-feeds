import { auth } from './Initialize';

export const login = async (email, password) => {
  try {
    const response = await auth.signInWithEmailAndPassword(email, password);
    if (response.user) {
      return response.user;
    }
  } catch(error) {
    throw error;
  }
}

export const logout = () => auth.signOut();
