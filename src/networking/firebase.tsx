// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9ztVSFuTKeyJU7EL8Z87OdgYPYtIzYHw",
  authDomain: "match-84338.firebaseapp.com",
  projectId: "match-84338",
  storageBucket: "match-84338.appspot.com",
  messagingSenderId: "204021989546",
  appId: "1:204021989546:web:d608f3f13a26c1b2efd0d3"
};

const db = firebase.initializeApp(firebaseConfig);

// Initialize Firebase
export default db;

