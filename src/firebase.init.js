import {getAuth} from "firebase/auth"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4ggjz3sRclRHZIYDkYeIhGolPT1WnHLA",
  authDomain: "warehouse-updated-management.firebaseapp.com",
  projectId: "warehouse-updated-management",
  storageBucket: "warehouse-updated-management.appspot.com",
  messagingSenderId: "270498437909",
  appId: "1:270498437909:web:fd1067ee4cbdfd55dc671c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;