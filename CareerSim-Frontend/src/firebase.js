// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// 🔹 Your Firebase config (already created earlier)
const firebaseConfig = {
 apiKey: "AIzaSyBKt7i247ZQwd9Rjjj3y4p_mvEo-G183pU",
  authDomain: "careersim-66005.firebaseapp.com",
  projectId: "careersim-66005",
  storageBucket: "careersim-66005.firebasestorage.app",
  messagingSenderId: "726180571940",
  appId: "1:726180571940:web:a4292cf839a38cf31061b1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Auth & Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);
