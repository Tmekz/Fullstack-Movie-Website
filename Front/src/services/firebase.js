import { getAuth } from "firebase/auth";
import { getFireStore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-YeOWC_QtuHr0ceUl87GmT53AtrKg_Ic",
  authDomain: "tmk-dev-fullstack-movie-app.firebaseapp.com",
  projectId: "tmk-dev-fullstack-movie-app",
  storageBucket: "tmk-dev-fullstack-movie-app.appspot.com",
  messagingSenderId: "973367949721",
  appId: "1:973367949721:web:f0733a4c6436512cf83b08",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFireStore(app);
