// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut as firbaseSignOut, getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYAelHFmR6l-m3--GmsdMN43sRtOfavdk",
  authDomain: "gb-react-8ed14.firebaseapp.com",
  databaseURL: "https://gb-react-8ed14-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "gb-react-8ed14",
  storageBucket: "gb-react-8ed14.appspot.com",
  messagingSenderId: "954378591239",
  appId: "1:954378591239:web:bce3c9aeac01033da75ea2",
  measurementId: "G-DHHDERFJSV"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getDatabase();

export const signUp = async (email, pass) => {
  await createUserWithEmailAndPassword(auth, email, pass);
}

export const login = async (email, pass) => {
  await signInWithEmailAndPassword(auth, email, pass);
};

export const signOut = async () => {
  await firbaseSignOut(auth);
}