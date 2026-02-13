import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
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

// Initialize Services and Export them for use in other files
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
