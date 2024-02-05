// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "gloire-blog.firebaseapp.com",
    projectId: "gloire-blog",
    storageBucket: "gloire-blog.appspot.com",
    messagingSenderId: "484703074691",
    appId: "1:484703074691:web:96e3eb4c655a964cf51eb6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);