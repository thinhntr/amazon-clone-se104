import firebase from "firebase";

const firebaseConfig = {}; // The config goes here

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
