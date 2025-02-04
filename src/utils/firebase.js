// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZzUhdqVL29q2kxuO81HBO_9M0J-FyrrU",
  authDomain: "netflix-gpt-b3039.firebaseapp.com",
  projectId: "netflix-gpt-b3039",
  storageBucket: "netflix-gpt-b3039.firebasestorage.app",
  messagingSenderId: "20196724925",
  appId: "1:20196724925:web:24c565040740cf1b94e7d4",
  measurementId: "G-BZNWQC2N6M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 