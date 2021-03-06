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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  objectToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
