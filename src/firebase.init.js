// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEVIqJ-liQV--_pj7ea6iH1HuR5HWT8Mg",
  authDomain: "warehouse-management-pro-e557c.firebaseapp.com",
  projectId: "warehouse-management-pro-e557c",
  storageBucket: "warehouse-management-pro-e557c.appspot.com",
  messagingSenderId: "931726134501",
  appId: "1:931726134501:web:7ed52745d8c4558563980c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;