import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfNIQGzZwtAWExiVhJopKLYa-kf34YaKc",
  authDomain: "t-sports-867bf.firebaseapp.com",
  projectId: "t-sports-867bf",
  storageBucket: "t-sports-867bf.appspot.com",
  messagingSenderId: "61908796410",
  appId: "1:61908796410:web:9e96920ca4140465399a43",
  measurementId: "G-YCE8B1HZ1R"
};

// Initialize Firebase
initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
