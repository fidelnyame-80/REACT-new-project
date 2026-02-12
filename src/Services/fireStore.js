

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0hzcJ-Ka1F3uZwKmYzx72ZbxjVW6vlOY",
  authDomain: "student-register-48d33.firebaseapp.com",
  projectId: "student-register-48d33",
  storageBucket: "student-register-48d33.firebasestorage.app",
  messagingSenderId: "315167969148",
  appId: "1:315167969148:web:b589fcb2477d56949f5ef9",
  measurementId: "G-VN29FTPDZ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db};