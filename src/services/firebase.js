import firebase from "firebase/app";
import "firebase/firestore";

let firebaseConfig = {
  apiKey: "AIzaSyBvOzNEWHO0H4-x2rrsIP4s9xK5VnvSPig",
  authDomain: "pets-c76dd.firebaseapp.com",
  projectId: "pets-c76dd",
  storageBucket: "pets-c76dd.appspot.com",
  messagingSenderId: "626060504631",
  appId: "1:626060504631:web:ff0a5ef4f4025c6ba119b2",
  measurementId: "G-Z2DNDZBM51",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
