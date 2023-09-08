// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider} from "firebase/auth";
import {getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjwZQTQ40srJ7bpayN0vCCrgiCcnPtXuU",
  authDomain: "friendfusion-1ade4.firebaseapp.com",
  projectId: "friendfusion-1ade4",
  storageBucket: "friendfusion-1ade4.appspot.com",
  messagingSenderId: "112244657984",
  appId: "1:112244657984:web:7cc2e0c0fa0e8b4b4434a5",
  measurementId: "G-F4LCX97PBG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleprovider = new GoogleAuthProvider();

export const db = getFirestore(app)
