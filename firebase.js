
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDX5KduBww9009TgJYS_sYEzzAIO2gefZk",
  authDomain: "kevo-4a76d.firebaseapp.com",
  projectId: "kevo-4a76d",
  storageBucket: "kevo-4a76d.firebasestorage.app",
  messagingSenderId: "970910385321",
  appId: "1:970910385321:web:ef9ecd26e6a6628dea55b8",
  measurementId: "G-6S32FGFHHT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
