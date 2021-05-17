import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAajXdnzUiJoR0NVmQHd9_Mu64J-VqxryQ",
  authDomain: "clone-se104.firebaseapp.com",
  projectId: "clone-se104",
  storageBucket: "clone-se104.appspot.com",
  messagingSenderId: "615919209041",
  appId: "1:615919209041:web:c06c8bf3b5aeb0f9290670",
  measurementId: "G-YCB8LZP2TB",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
