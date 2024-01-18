// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwMr4DAXrOuxYZtm5ruaAP-wVK6i9xrAQ",
  authDomain: "flightsapp-84bfb.firebaseapp.com",
  projectId: "flightsapp-84bfb",
  storageBucket: "flightsapp-84bfb.appspot.com",
  messagingSenderId: "885739237783",
  appId: "1:885739237783:web:5ede848d3a434f50ea14d2",
  measurementId: "G-3ZVRWD4E4W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = firebase.firestore();

export default{
    firebase,
    db,
}
