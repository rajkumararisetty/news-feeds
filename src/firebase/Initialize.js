import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import env from '../.env';

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: env.firebase.apiKey,
  authDomain: env.firebase.authDomain,
  databaseURL: env.firebase.databaseURL,
  projectId: env.firebase.projectId,
  storageBucket: env.firebase.storageBucket,
  messagingSenderId: env.firebase.messagingSenderId
});

const firestore = firebase.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);

const db = firestore;
const auth = firebase.auth();
auth.useDeviceLanguage();

export {firebase, db, auth};
