import firebase from 'firebase/app';
import 'firebase/firestore';
import env from '../.env';

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: env.firebase.apiKey,
  authDomain: env.firebase.authDomain,
  projectId: env.firebase.projectId
});
const db = firebase.firestore();

export default db;
