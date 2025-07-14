import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAiR2Vf4vJPhAvFHKjyfNQsqXHeKdoRFKs",
  authDomain: "hooks-reacks.firebaseapp.com",
  projectId: "hooks-reacks",
  storageBucket: "hooks-reacks.firebasestorage.app",
  messagingSenderId: "853394401721",
  appId: "1:853394401721:web:67f1b940f6d9f383a26e68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app); 
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };