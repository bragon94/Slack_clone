import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAi6PVgEAC8g48yaL-PEMhAA8iLpU9TqWw",
  authDomain: "slackclone-98f0d.firebaseapp.com",
  projectId: "slackclone-98f0d",
  storageBucket: "slackclone-98f0d.appspot.com",
  messagingSenderId: "107065978954",
  appId: "1:107065978954:web:0f9cb715a46cf2463bb6b3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
