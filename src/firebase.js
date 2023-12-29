// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3Hg0Gsa13ZltxFybjDrabXOLrpgG7t2o",
  authDomain: "linkedin-clone-7609f.firebaseapp.com",
  projectId: "linkedin-clone-7609f",
  storageBucket: "linkedin-clone-7609f.appspot.com",
  messagingSenderId: "203658997204",
  appId: "1:203658997204:web:78858e37d82d7fd3d1fa41"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};