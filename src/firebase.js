import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getStorage, ref } from "firebase/storage";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaXJI46PxBshuk48PJGWZILTKpBN8bgC4",
  authDomain: "disney-clone-bk0.firebaseapp.com",
  projectId: "disney-clone-bk0",
  storageBucket: "disney-clone-bk0.appspot.com",
  messagingSenderId: "958553568474",
  appId: "1:958553568474:web:f9f123806afaba4b92a1e3",
  measurementId: "G-TG6HPDGJ5G"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  const storage = getStorage();
  const storageRef = ref(storage);

  export { auth, provider, storageRef };
  export default db;