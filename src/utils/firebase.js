import firebase from "firebase/app";
import "firebase/database"; 

const firebaseConfig = {
  apiKey: "AIzaSyC4im1RkjDsb8bIFI8B7pHilZ6my2TILwA",
  authDomain: "react-crud-8d482.firebaseapp.com",
  projectId: "react-crud-8d482",
  storageBucket: "react-crud-8d482.appspot.com",
  messagingSenderId: "167057227196",
  appId: "1:167057227196:web:bc36dce5aa3b3e4229bfb9",
  measurementId: "G-P9J852S2NY"
  };
  
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }


  export default firebase.database();
