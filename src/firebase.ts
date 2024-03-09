// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBn6Wmqk2v5wjHNVP1OF_JULy9EnNTM-pc',
  authDomain: 'discorde-clone-udemy.firebaseapp.com',
  projectId: 'discorde-clone-udemy',
  storageBucket: 'discorde-clone-udemy.appspot.com',
  messagingSenderId: '593048828945',
  appId: '1:593048828945:web:316b390a1bdf5b40bb05b0',
  measurementId: 'G-X2QPLWRX52',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
