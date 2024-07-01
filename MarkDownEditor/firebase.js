// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXed7V1yYfDDk9U8gE6b9TSKGITcrOB2g",
  authDomain: "reactnotes-8893d.firebaseapp.com",
  projectId: "reactnotes-8893d",
  storageBucket: "reactnotes-8893d.appspot.com",
  messagingSenderId: "266027510411",
  appId: "1:266027510411:web:a8e8fb6f2e6120e0ad028e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")