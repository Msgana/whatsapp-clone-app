// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDXTPL6WDGl5wtvKnilhnmLmKFXpiBvy18",
  authDomain: "whatsapp-d5c6e.firebaseapp.com",
  projectId: "whatsapp-d5c6e",
  storageBucket: "whatsapp-d5c6e.appspot.com",
  messagingSenderId: "394932372101",
  appId: "1:394932372101:web:bda3d98a861f4cc1879fec",
  measurementId: "G-E5E3D5M0JL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
