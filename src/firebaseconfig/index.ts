// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEGcsrrNmt0jTou5eRyVj4rhkDz4stg3U",
  authDomain: "blogs1-97b80.firebaseapp.com",
  projectId: "blogs1-97b80",
  storageBucket: "blogs1-97b80.firebasestorage.app",
  messagingSenderId: "389499026585",
  appId: "1:389499026585:web:0e826bc55ea7b45c154c08",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
