// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBn8d-zlglanDgmDrGy7ZAYa0fdv1tpbGc",
  authDomain: "portfolio-7e657.firebaseapp.com",
  projectId: "portfolio-7e657",
  storageBucket: "portfolio-7e657.firebasestorage.app",
  messagingSenderId: "477581990684",
  appId: "1:477581990684:web:c8d8f29bead6368877b8d9",
  measurementId: "G-4YMXTEBCND"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db};