// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyDw1LAiO88992_p25ifqF3i7Ja8AYX9KOE",
  authDomain: "netflix-react-clone-be4b7.firebaseapp.com",
  projectId: "netflix-react-clone-be4b7",
  storageBucket: "netflix-react-clone-be4b7.appspot.com",
  messagingSenderId: "20444489374",
  appId: "1:20444489374:web:ba9daadd0e867f72f27d8f",
  measurementId: "G-TQCLXXP70M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app) 