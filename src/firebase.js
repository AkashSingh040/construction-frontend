import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, RecaptchaVerifier } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCg1_JZBLPTLwpIviB0slOnxztKNyllBBY",
  authDomain: "construction-company-68942.firebaseapp.com",
  projectId: "construction-company-68942",
  storageBucket: "construction-company-68942.firebasestorage.app",
  messagingSenderId: "151540537190",
  appId: "1:151540537190:web:12bb6b5ba6d734d5185aa7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 🔐 Firebase Auth
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// 📱 For Phone OTP (later)
export { RecaptchaVerifier };
