import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA2_Kkesu0J4Vnwd5_cckyyvaPkMeqfOVw",
  authDomain: "koftov.firebaseapp.com",
  databaseURL: "https://koftov.firebaseio.com",
  projectId: "koftov",
  storageBucket: "koftov.appspot.com",
  messagingSenderId: "623712315101",
  appId: "1:623712315101:web:e472c4480c53200afd1d34",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
