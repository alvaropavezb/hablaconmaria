import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAlsLWHqT0kn3t6kWl6_0RHrDDNH3KvjBU",
  authDomain: "crwn-db-6545f.firebaseapp.com",
  projectId: "crwn-db-6545f",
  storageBucket: "crwn-db-6545f.appspot.com",
  messagingSenderId: "986754005618",
  appId: "1:986754005618:web:a482caeb05da860806e0eb",
  measurementId: "G-CTMDMTC56C",
};

export const getTopics = async() => {
    const markers = [];
    await firebase.firestore().collection('topics').get()
      .then(querySnapshot => {
        querySnapshot.docs.forEach(doc => {
        markers.push(doc.data());
      });
    });
    return markers;
  }

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;
