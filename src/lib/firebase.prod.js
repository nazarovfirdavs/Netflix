// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'
import { seedDatabase } from "../seed";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5rfTBkm8F3BRZSej8srbvEuL0i5TNcSo",
  authDomain: "netfl-9a141.firebaseapp.com",
  projectId: "netfl-9a141",
  storageBucket: "netfl-9a141.appspot.com",
  messagingSenderId: "1037995886700",
  appId: "1:1037995886700:web:143f84e72c47998ed97049"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firebase = firebase.initializeApp(firebaseConfig);

// seedDatabase(firebase);

export { firebase };