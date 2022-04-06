import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";
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

export const getTopics = async () => {
  const markers = [];
  await firebase
    .firestore()
    .collection("topics")
    .get()
    .then((querySnapshot) => {
      querySnapshot.docs.forEach((doc) => {
        markers.push(doc.data());
      });
    });
  return markers;
};

export const addTopic = async (name, image, preguntas) => {
  const storageRef = firebase.storage().ref("/" + image.name);
  const task = storageRef.put(image);
  task.on("state_changed", function complete(event) {
    storageRef.getDownloadURL().then((url) => {
      //img
      const coverImage = url;
      console.log(coverImage);
      firebase.firestore().collection("topics").doc(name).set({
        coverImage: coverImage,
        preguntas: preguntas,
      });
      alert("Guardado");
    });
  });

  /* await firebase.firestore().collection("topics").doc(name).set({
    name: "test",
  }); */
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

const storage = firebase.storage();

export default firebase;
