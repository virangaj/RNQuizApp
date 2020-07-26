import firebase from "firebase";
import "firebase/auth";
const config = {
  apiKey: "AIzaSyAQivyX56zbFEBSrJybcjXteEGXCKEdSEs",
  authDomain: "react-login-quiz-test.firebaseapp.com",
  databaseURL: "https://react-login-quiz-test.firebaseio.com",
  projectId: "react-login-quiz-test",
  storageBucket: "react-login-quiz-test.appspot.com",
  messagingSenderId: "103596531145",
  appId: "1:103596531145:web:6afd2fd395a64526d51c18",
  measurementId: "G-44FHPWNZ30",
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase;
