// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnvvWLgxgkySxWioFanxz4q3QHBXJQBOU",
  authDomain: "strongerfish-4f774.firebaseapp.com",
  databaseURL: "https://strongerfish-4f774-default-rtdb.firebaseio.com",
  projectId: "strongerfish-4f774",
  storageBucket: "strongerfish-4f774.appspot.com",
  messagingSenderId: "105464039581",
  appId: "1:105464039581:web:a7e8ae740527de47232c74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;