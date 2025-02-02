// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGLcNmezZcuKeC8JiYiZwe0gD8TkZDy_s",
  authDomain: "portfolio-7f1ab.firebaseapp.com",
  projectId: "portfolio-7f1ab",
  storageBucket: "portfolio-7f1ab.firebasestorage.app",
  messagingSenderId: "598933027329",
  appId: "1:598933027329:web:e040a0b5213b3cab799e00",
  measurementId: "G-VDFRPYV3W0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);