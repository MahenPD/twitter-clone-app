import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCBqxVApriwL6mjvUrlk2C0oJd1eCvvfuI",
  authDomain: "twitter-clone-app-21126.firebaseapp.com",
  projectId: "twitter-clone-app-21126",
  storageBucket: "twitter-clone-app-21126.appspot.com",
  messagingSenderId: "1068373378785",
  appId: "1:1068373378785:web:c78b2a4b60d1f7d568d9a0",
  measurementId: "G-ET4NQYVQS5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
