import firebase from 'firebase/'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBj2Tt8zSRBiJVwkq3iINRaCUrF6ucEtGM",
  authDomain: "gestion-bbc88.firebaseapp.com",
  projectId: "gestion-bbc88",
  storageBucket: "gestion-bbc88.appspot.com",
  messagingSenderId: "84733700701",
  appId: "1:84733700701:web:3f45e54e8272ef9ecafbb4",
  measurementId: "G-R61V2QC65Z"
}

try {
  firebase.initializeApp(firebaseConfig);
}
catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Deu erro');
  }
}

export default firebase