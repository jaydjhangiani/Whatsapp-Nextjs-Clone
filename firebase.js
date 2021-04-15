import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAwPky7YlO7kdODDWaNZzU8U_JLLlsFH9M",
    authDomain: "jj-whatsapp2.firebaseapp.com",
    projectId: "jj-whatsapp2",
    storageBucket: "jj-whatsapp2.appspot.com",
    messagingSenderId: "58574714268",
    appId: "1:58574714268:web:f259dd9e2a09928772c459"
  };

const app = !firebase.apps.length 
    ? firebase.initializeApp(firebaseConfig) 
    : firebase.app()

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db,auth,provider}