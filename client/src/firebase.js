
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBU_obnvDhIm8iREy3xKlImejoKgu6NWws",
  authDomain: "mern-project-589d7.firebaseapp.com",
  projectId: "mern-project-589d7",
  storageBucket: "mern-project-589d7.appspot.com",
  messagingSenderId: "250759033338",
  appId: "1:250759033338:web:4f8c02685cca5442f7b443"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);