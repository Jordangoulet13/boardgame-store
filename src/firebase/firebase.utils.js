import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBsewGziuh7ZHeZT89hSj2Lz9XDgB364fY",
  authDomain: "boardgame-store.firebaseapp.com",
  projectId: "boardgame-store",
  storageBucket: "boardgame-store.appspot.com",
  messagingSenderId: "999833145824",
  appId: "1:999833145824:web:79efed00a6671a112f5b85",
  measurementId: "G-H947FD7BYH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
