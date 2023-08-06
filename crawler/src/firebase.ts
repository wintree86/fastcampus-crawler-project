import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyAVpA1suyMCLWmJ9dwVCRBVxjtKQB22HUY",
    authDomain: "my-article-44313.firebaseapp.com",
    projectId: "my-article-44313",
    storageBucket: "my-article-44313.appspot.com",
    messagingSenderId: "725663048577",
    appId: "1:725663048577:web:540da29f9130570c63fe80",
  };
  
  export const app = initializeApp(firebaseConfig);

  