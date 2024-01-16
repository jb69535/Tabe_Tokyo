// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAczS-206ks4-puqpunDs_TBUx2VoWDnVw",
  authDomain: "tabetokyo-4d168.firebaseapp.com",
  databaseURL: "https://tabetokyo-4d168-default-rtdb.firebaseio.com",
  projectId: "tabetokyo-4d168",
  storageBucket: "tabetokyo-4d168.appspot.com",
  messagingSenderId: "90557252963",
  appId: "1:90557252963:web:d565737b337d390e517f56",
  measurementId: "G-6D9X4Q4QYC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const database = getDatabase(app);
