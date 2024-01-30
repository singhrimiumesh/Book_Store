// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHACJXYDofnQy1GMN6Sr0qNK8k3Egt6a8",
  authDomain: "the-digital-repository.firebaseapp.com",
  projectId: "the-digital-repository",
  storageBucket: "the-digital-repository.appspot.com",
  messagingSenderId: "163774029540",
  appId: "1:163774029540:web:b29ddd0de973f62aaf16f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;