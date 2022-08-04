// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAD7YYFxX3BGmmFBFLgIFWBymHmnT2xbi8",
  authDomain: "react-booking-app-ae0ce.firebaseapp.com",
  projectId: "react-booking-app-ae0ce",
  storageBucket: "react-booking-app-ae0ce.appspot.com",
  messagingSenderId: "578664526696",
  appId: "1:578664526696:web:df8c2455ac28126d52dcdd"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);