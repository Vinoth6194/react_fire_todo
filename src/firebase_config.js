import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBmru40x5VKcTPrQ1-lsS3PrQI77LNA9f4",
  authDomain: "react-fire-todo-9325d.firebaseapp.com",
  projectId: "react-fire-todo-9325d",
  storageBucket: "react-fire-todo-9325d.appspot.com",
  messagingSenderId: "368961429744",
  appId: "1:368961429744:web:0e2fffae601737ba60e235",
  measurementId: "G-ZTHYWEK9XX",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export { db };
