// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMwF1dGiY8oqMMzy6ypzuwaCgcPsx6PvM",
  authDomain: "online-study-c6231.firebaseapp.com",
  projectId: "online-study-c6231",
  storageBucket: "online-study-c6231.appspot.com",
  messagingSenderId: "224294220903",
  appId: "1:224294220903:web:506ef21aedfad915ba10c2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;