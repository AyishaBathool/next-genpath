// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfsPYXrSWh-126Uv66AkxEoQ0fb2LTO-c",
  authDomain: "genpath-94b3b.firebaseapp.com",
  projectId: "genpath-94b3b",
  storageBucket: "genpath-94b3b.firebasestorage.app",
  messagingSenderId: "29052046102",
  appId: "1:29052046102:web:e6f63460db3b90e078de37",
  measurementId: "G-5W71X0GRTY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app)