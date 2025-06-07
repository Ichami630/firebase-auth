// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,createUserWithEmailAndPassword,sendEmailVerification,signInWithEmailAndPassword
 } from "firebase/auth"; 

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDm4n_vByqg22kCZdGA3phkhz_pWPyLwcs",
  authDomain: "login-auth-49e4f.firebaseapp.com",
  projectId: "login-auth-49e4f",
  storageBucket: "login-auth-49e4f.firebasestorage.app",
  messagingSenderId: "428197208232",
  appId: "1:428197208232:web:704fef176e49c004b6a29d",
  measurementId: "G-VDRWCV7DGS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const ANALYTICS = getAnalytics(app);
const auth = getAuth(app); // Initialize Firebase Authentication and get a reference to the service

export {auth,createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword
}
export default app; // Export the initialized app for use in other parts of your application