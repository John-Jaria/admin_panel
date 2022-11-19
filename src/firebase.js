// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyC5OjAlDbEPprpJjDUCnTgyZY-5uYnCzUg",
  authDomain: "auth-dev-4bf91.firebaseapp.com",
  projectId: "auth-dev-4bf91",
  storageBucket: "auth-dev-4bf91.appspot.com",
  messagingSenderId: "935990669404",
  appId: "1:935990669404:web:57e71538c5e94fc3d07699"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);