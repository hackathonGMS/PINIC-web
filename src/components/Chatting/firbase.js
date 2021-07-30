import firebase from "firebase";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyDb9OSntN8yMwRhFmOBdQJPMXCvgd1C1E4",
  authDomain: "picnic-163ae.firebaseapp.com",
  projectId: "picnic-163ae",
  storageBucket: "picnic-163ae.appspot.com",
  messagingSenderId: "306560948784",
  appId: "1:306560948784:web:8252a05408c61e908babf5",
  measurementId: "G-GXW7F7G36Y",
});
const db = firebaseConfig.firestore();
export default db;
