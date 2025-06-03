import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "твой ключ",
    authDomain: "твой проект.firebaseapp.com",
    projectId: "твой проект-id",
    storageBucket: "твой проект.appspot.com",
    messagingSenderId: "xxx",
    appId: "xxx"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
