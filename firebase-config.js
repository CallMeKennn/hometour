// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMUgWfH532nxuAGdzv6CPJMYGTKWOdesU",
  authDomain: "ecommerce-dercer-website.firebaseapp.com",
  projectId: "ecommerce-dercer-website",
  storageBucket: "ecommerce-dercer-website.appspot.com",
  messagingSenderId: "529879375387",
  appId: "1:529879375387:web:092ed5931ea942c2d2a2be",
  measurementId: "G-EKFEY4KKQP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);