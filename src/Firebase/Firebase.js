// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyAbts_DRDWEPP1Oa-DWYvIsk8M7RJ5eyc8",
  authDomain: "moduleten-f3434.firebaseapp.com",
  projectId: "moduleten-f3434",
  storageBucket: "moduleten-f3434.appspot.com",
  messagingSenderId: "703534667509",
  appId: "1:703534667509:web:b3b4c420cc5bb87f6097bc",
  measurementId: "G-KB54GE66P8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;