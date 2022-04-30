// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdrUI_QWx2oSmuWSj-Q2CaZO6tAgGzfCY",
  authDomain: "cars-empire.firebaseapp.com",
  projectId: "cars-empire",
  storageBucket: "cars-empire.appspot.com",
  messagingSenderId: "11264666529",
  appId: "1:11264666529:web:e032eb693950873878f9e0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
