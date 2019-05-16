import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyCVbHZ-tPrGb7QG5VmcpBO5WednLjFj3Qk",
  authDomain: "vsmon-c4154.firebaseapp.com",
  databaseURL: "https://vsmon-c4154.firebaseio.com",
  projectId: "vsmon-c4154",
  storageBucket: "vsmon-c4154.appspot.com",
  messagingSenderId: "52235432822",
  appId: "1:52235432822:web:19604b003b769ae7"
};

firebase.initializeApp(config);

const db = firebase.firestore();
const auth = firebase.auth();

const _firebase = {
  db,
  auth,
};

export default _firebase;
