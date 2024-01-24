// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDwMr4DAXrOuxYZtm5ruaAP-wVK6i9xrAQ",
  authDomain: "flightsapp-84bfb.firebaseapp.com",
  projectId: "flightsapp-84bfb",
  storageBucket: "flightsapp-84bfb.appspot.com",
  messagingSenderId: "885739237783",
  appId: "1:885739237783:web:5ede848d3a434f50ea14d2",
  measurementId: "G-3ZVRWD4E4W"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { firebaseConfig, auth };

// Android ID: 885739237783-up13r45l3t663rpc22q7g5iq0un4rh9f.apps.googleusercontent.com