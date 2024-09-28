// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnOWyjWzWGMXiMqyKmpgZI4kqhyQ6aE40",
  authDomain: "netflixgpt-2303.firebaseapp.com",
  projectId: "netflixgpt-2303",
  storageBucket: "netflixgpt-2303.appspot.com",
  messagingSenderId: "761122139516",
  appId: "1:761122139516:web:cf9f0cf05787114e1208f9",
  measurementId: "G-92W640ZP5D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();