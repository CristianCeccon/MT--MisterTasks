
import firebase from 'firebase';
import "firebase/storage"

var firebaseConfig = {
    apiKey: "AIzaSyBdtDoSAmiB6rW5oSpsyRGwPZyUpJSp3eE",
    authDomain: "memarket-d80cd.firebaseapp.com",
    projectId: "memarket-d80cd",
    storageBucket: "memarket-d80cd.appspot.com",
    messagingSenderId: "190538205031",
    appId: "1:190538205031:web:83b1cf67b604e259b511c2"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.firestore()
export default database