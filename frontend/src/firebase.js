// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "grandtour-e7d79.firebaseapp.com",
  projectId: "grandtour-e7d79",
  storageBucket: "grandtour-e7d79.appspot.com",
  messagingSenderId: "381825637843",
  appId: "1:381825637843:web:23606f24765689f45f6326",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
