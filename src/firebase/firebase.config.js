// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBdG9GRwTMwB70xSmDoSPkhQ1I1K3rOnfw",
    authDomain: "dragon-news-bulletin-21343.firebaseapp.com",
    projectId: "dragon-news-bulletin-21343",
    storageBucket: "dragon-news-bulletin-21343.firebasestorage.app",
    messagingSenderId: "55128678508",
    appId: "1:55128678508:web:862e5bc36204f719557849"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;