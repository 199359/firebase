import firebase from 'firebase'
  

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyAtTRZOGT_NmVhzdE-0D6Frrl-vO1xS7Dc",
    authDomain: "test-4b9cd.firebaseapp.com",
    databaseURL: "https://test-4b9cd.firebaseio.com",
    projectId: "test-4b9cd",
    storageBucket: "test-4b9cd.appspot.com",
    messagingSenderId: "311928593199"
  }

  firebase.initializeApp(config)

   
  export const auth = firebase.auth()
  export const database = firebase.database()
  export const googleProvider = new firebase.auth.GoogleAuthProvider()
