import firebase from "firebase/app"
import "firebase/firestore"

var firebaseConfig = {
    apiKey: "AIzaSyBAYPlHj5A6J9epgOqnkrmJsKaqb1aJrvM",
    authDomain: "website-comments2-10859.firebaseapp.com",
    databaseURL: "https://website-comments2-10859.firebaseio.com",
    projectId: "website-comments2-10859",
    storageBucket: "website-comments2-10859.appspot.com",
    messagingSenderId: "74518743979",
    appId: "1:74518743979:web:269a7435106004665c60ee"
  };

firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore()

export default firebase