// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-b7209.firebaseapp.com",
  projectId: "mern-estate-b7209",
  storageBucket: "mern-estate-b7209.appspot.com",
  messagingSenderId: "316858865796",
  appId: "1:316858865796:web:5162e5df2ae04f43978ad1",
  measurementId: "G-DCF9HSTZPK",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
