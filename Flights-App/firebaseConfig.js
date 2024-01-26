import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDkMB58AOGO2a-FyaPHhJpAef7aJ81WXro",
  authDomain: "flights-app-293e3.firebaseapp.com",
  projectId: "flights-app-293e3",
  storageBucket: "flights-app-293e3.appspot.com",
  messagingSenderId: "209290529552",
  appId: "1:209290529552:web:12c958acb25e1921abf395",
  measurementId: "G-TLB56WW5WG"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { firebaseConfig, auth };
