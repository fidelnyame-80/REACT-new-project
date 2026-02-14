// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeP0CFHjtKA6mzGLvj3MUPDot_sFqHmNI",
  authDomain: "patient-record-app-6274a.firebaseapp.com",
  projectId: "patient-record-app-6274a",
  storageBucket: "patient-record-app-6274a.firebasestorage.app",
  messagingSenderId: "892426109003",
  appId: "1:892426109003:web:443bb041ee5e05178b8dce",
  measurementId: "G-Q3DCM2T866"
};

// // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
// const analytics = getAnalytics(app);

export {db};
