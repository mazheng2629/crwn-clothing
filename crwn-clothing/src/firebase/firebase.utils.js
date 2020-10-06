import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCCzvzbttyAq4W9LmKYa40WBxY2LcBQ6EY",
  authDomain: "crwn-db-2f45a.firebaseapp.com",
  databaseURL: "https://crwn-db-2f45a.firebaseio.com",
  projectId: "crwn-db-2f45a",
  storageBucket: "crwn-db-2f45a.appspot.com",
  messagingSenderId: "1018662429371",
  appId: "1:1018662429371:web:1def9db8a5bb196bd3ff9e",
  measurementId: "G-PR1260554W",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
