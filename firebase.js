import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyCJfMQIzmH-2AOP_DOHMsOCG_KPHdx8Kqs",
  authDomain: "googl-docs.firebaseapp.com",
  projectId: "googl-docs",
  storageBucket: "googl-docs.appspot.com",
  messagingSenderId: "664359361759",
  appId: "1:664359361759:web:de3f9b3e55f5dd7d439d6a",
  measurementId: "G-Q9SGBJJMZ9"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
export { db }
