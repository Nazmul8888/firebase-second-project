// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrsHF-pbEHHhDVP9d3W65ChGvPI3LjXOI",
  authDomain: "simple-project-fefec.firebaseapp.com",
  projectId: "simple-project-fefec",
  storageBucket: "simple-project-fefec.appspot.com",
  messagingSenderId: "219694049415",
  appId: "1:219694049415:web:98397d870e2ca8004eb022"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;