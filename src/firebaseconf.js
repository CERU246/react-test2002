// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQuPjVwMDDV92Q1dau0zj6_36MsrG6l1U",
  authDomain: "backend-comision69575.firebaseapp.com",
  projectId: "backend-comision69575",
  storageBucket: "backend-comision69575.firebasestorage.app",
  messagingSenderId: "411446766604",
  appId: "1:411446766604:web:b66fe2d8244abb4e2b9229",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);