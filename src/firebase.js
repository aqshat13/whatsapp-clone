import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import 'firebase/compat/database';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBMytvkiSyWzPioIuF5kFEDIk_kqkSJV6Q",
  authDomain: "whatsapp-clone-3b081.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-3b081-default-rtdb.firebaseio.com",
  projectId: "whatsapp-clone-3b081",
  storageBucket: "whatsapp-clone-3b081.appspot.com",
  messagingSenderId: "378317989962",
  appId: "1:378317989962:web:43270c48b076d57a849eb3",
  measurementId: "G-1M1NN6GZS5"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export{ auth, provider};
  export default db;
