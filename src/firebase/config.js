import firebase  from "firebase/app";
import "firebase/firestore"
import "firebase/auth"
import "firebase/storage"
const firebaseConfig = {
    apiKey: "AIzaSyBs4OQ00zMRbFzgNiEihjLO_PBBq1PFNTI",
    authDomain: "reactchat-600f0.firebaseapp.com",
    projectId: "reactchat-600f0",
    storageBucket: "reactchat-600f0.appspot.com",
    messagingSenderId: "194384114531",
    appId: "1:194384114531:web:434f055aa524641c085956"
  };
  firebase.initializeApp(firebaseConfig)
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()
  const projectStorage = firebase.storage()
  const timestamp = firebase.firestore.Timestamp
  export {projectFirestore,projectAuth,projectStorage,timestamp}