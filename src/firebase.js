import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA54aiOyl1hGzhgsg89Un-3Bs6LHI8b42A",
  authDomain: "clone-404.firebaseapp.com",
  projectId: "clone-404",
  storageBucket: "clone-404.appspot.com",
  messagingSenderId: "964294353092",
  appId: "1:964294353092:web:4458c840e2f21893daa991",
  measurementId: "G-NQKCFLEQBN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
