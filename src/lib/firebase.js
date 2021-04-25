import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBJGx5BQu3DwcglpUj2bAI9PYWsCv9sT1k",
    authDomain: "instagram-clone-1898c.firebaseapp.com",
    projectId: "instagram-clone-1898c",
    storageBucket: "instagram-clone-1898c.appspot.com",
    messagingSenderId: "1003759544514",
    appId: "1:1003759544514:web:27b4f35f81caee4e2f335b"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };