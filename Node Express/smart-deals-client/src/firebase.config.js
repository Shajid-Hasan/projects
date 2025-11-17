// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNXacP0MFPbB-31Yvy4qvZ-wP3MUGq_nA",
  authDomain: "smart-deals-83144.firebaseapp.com",
  projectId: "smart-deals-83144",
  storageBucket: "smart-deals-83144.firebasestorage.app",
  messagingSenderId: "1025987754687",
  appId: "1:1025987754687:web:03a2cf55cafd74ebc3a40a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);