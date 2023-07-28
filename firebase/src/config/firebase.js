// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyB67K2ZxHCzOwQ4Io27B6Eoyd0ePo-kdLg",
  authDomain: "testreact-4dfad.firebaseapp.com",
  projectId: "testreact-4dfad",
  storageBucket: "testreact-4dfad.appspot.com",
  messagingSenderId: "646708700219",
  appId: "1:646708700219:web:9c227278622bc7c338281e",
  measurementId: "G-L9ME9HRD7D"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);