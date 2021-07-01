import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCJ9Piv_bl5VQhLYCGJvb8R6TFQqEwagcI",
  authDomain: "eduar-4eb29.firebaseapp.com",
  projectId: "eduar-4eb29",
  storageBucket: "eduar-4eb29.appspot.com",
  messagingSenderId: "141389144470",
  appId: "1:141389144470:web:eaf66169403379a798bdb7",
  measurementId: "G-WCQ7952PSB"
};

const fire = firebase.initializeApp(firebaseConfig)

export default fire;