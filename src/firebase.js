import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const apikey = process.env.REACT_APP_KEY;
const authdomain = process.env.REACT_APP_AUTHDOMAIN;
const projectid = process.env.REACT_APP_PROJECTID;
const storagebucket = process.env.REACT_APP_STORAGEBUCKET;
const messagingsenderid = process.env.REACT_APP_MESSAGESENDINGID;
const appid = process.env.REACT_APP_APPID;
const measurementid = process.env.REACT_APP_MEASUREMENTID;

//Start Firebase connection
const firebaseApp = firebase.initializeApp({
  apiKey: `${apikey}`,
  authDomain: `${authdomain}`,
  projectId: `${projectid}`,
  storageBucket: `${storagebucket}`,
  messagingSenderId: `${messagingsenderid}`,
  appId: `${appid}`,
  measurementId: `${measurementid}`
})

//Access to db
const db = firebaseApp.firestore();
//Authetication
const auth = firebase.auth()

//Export both variables to be used anywhere on the project
export { db, auth }