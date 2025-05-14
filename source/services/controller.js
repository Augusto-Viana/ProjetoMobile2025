// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlr7J1z6lWsQCV_w0zaXM0EmV4kyZB1_4",
  authDomain: "aulasm2025-d4006-aug.firebaseapp.com",
  projectId: "aulasm2025-d4006-aug",
  storageBucket: "aulasm2025-d4006-aug.firebasestorage.app",
  messagingSenderId: "378575465448",
  appId: "1:378575465448:web:b8420a503bfa9ce345525d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);