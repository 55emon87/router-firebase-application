// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmxRwoNwlT4YstbsHMmUgtje2jDoy8G1g",
  authDomain: "router-firebase-application.firebaseapp.com",
  projectId: "router-firebase-application",
  storageBucket: "router-firebase-application.appspot.com",
  messagingSenderId: "962333811848",
  appId: "1:962333811848:web:921cd5c0c02b7d9d996b3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;