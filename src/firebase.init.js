
import {getAuth} from "firebase/auth"

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfYTgbd5y4LaXiNlTRTUU8ofWNC1gQYDE",
  authDomain: "warehouse-update-host.firebaseapp.com",
  projectId: "warehouse-update-host",
  storageBucket: "warehouse-update-host.appspot.com",
  messagingSenderId: "452941280091",
  appId: "1:452941280091:web:f34553ff971aec1d80e07e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;