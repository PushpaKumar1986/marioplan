import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCO7503wajnP1GJnTmsiNdURnGkRMbkBdM",
    authDomain: "test-app-37de0.firebaseapp.com",
    databaseURL: "https://test-app-37de0.firebaseio.com",
    projectId: "test-app-37de0",
    storageBucket: "test-app-37de0.appspot.com",
    messagingSenderId: "442687995657"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots : true});

  export default firebase;