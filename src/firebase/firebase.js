import * as firebase from "firebase"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCaqSmd86WD383NaAWOp9YdnnKoQxOSlrU",
    authDomain: "fir-protes.firebaseapp.com",
    projectId: "fir-protes",
    storageBucket: "fir-protes.appspot.com",
    messagingSenderId: "827496307368",
    appId: "1:827496307368:web:4562df072c4d23603c409d",
    measurementId: "G-ZJKL8VSY2G"
};

const app = firebase.initializeApp(firebaseConfig)
const auth = app.auth()

export { auth };