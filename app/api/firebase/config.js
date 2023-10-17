// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjH-IDai7hYBZJtmtg8qYx4ylpL2LJxm0",
  authDomain: "fastkar.firebaseapp.com",
  projectId: "fastkar",
  storageBucket: "fastkar.appspot.com",
  messagingSenderId: "404382724371",
  appId: "1:404382724371:web:6dd645011f1db3745f6ae6",
  measurementId: "G-J275N30B9Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);