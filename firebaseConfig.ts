// firebaseConfig.ts
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
//import {getFirestore} from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzFM7Q5kw3jnY9bHr7rWZ_0Fuvq238sXI",
  authDomain: "companyapp-64709.firebaseapp.com",
  projectId: "companyapp-64709",
  storageBucket: "companyapp-64709.firebasestorage.app",
  messagingSenderId: "610161685825",
  appId: "1:610161685825:web:f58256f4fd319d08311dc0",
  measurementId: "G-FXB9C7B2V5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
//export const db = getFirestore(app);

