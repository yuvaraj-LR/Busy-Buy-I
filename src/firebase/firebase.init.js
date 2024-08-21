import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCmf6dglKizq_tpGeFwOeP0vx9tHW96we0",
    authDomain: "blogging-application-c83f0.firebaseapp.com",
    projectId: "blogging-application-c83f0",
    storageBucket: "blogging-application-c83f0.appspot.com",
    messagingSenderId: "169566354002",
    appId: "1:169566354002:web:2f37dedc61716eb517fd8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

