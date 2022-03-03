import * as firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyD4yinFehGZXmAKVo1yZKSG388UxT2sK7w",
    authDomain: "fir-68344.firebaseapp.com",
    projectId: "fir-68344",
    storageBucket: "fir-68344.appspot.com",
    messagingSenderId: "827280408601",
    appId: "1:827280408601:web:53656c831a894e63516a88",
    measurementId: "G-DHLJSNSL9M"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();
const cloud = app.storage();
const googleProvider  = new firebase.auth.GoogleAuthProvider();;
export { auth, googleProvider, cloud, db,firebase };