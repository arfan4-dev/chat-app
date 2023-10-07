// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvt8dWzU7YtbBIBssLGK3drPG042sG4t4",
  authDomain: "chat-app-28c1d.firebaseapp.com",
  projectId: "chat-app-28c1d",
  storageBucket: "chat-app-28c1d.appspot.com",
  messagingSenderId: "731810326919",
  appId: "1:731810326919:web:2be7f2a5b91d6923f28b22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth()
export const storage = getStorage();
export const db = getFirestore();
export default app