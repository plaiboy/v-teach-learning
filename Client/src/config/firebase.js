// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import {getStorage} from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyCg7_o3F_GQeBlI6W79a4_8GBx5EiXlVig",
  authDomain: "v-teach-e-learning.firebaseapp.com",
  projectId: "v-teach-e-learning",
  storageBucket: "v-teach-e-learning.appspot.com",
  messagingSenderId: "233480616833",
  appId: "1:233480616833:web:4414df2c217a53f45a8680",
  measurementId: "G-9MZZ6KLGK6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);