import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyChL3IXd71YKv42Parav1ejHhGZKFiq3dI",
    authDomain: "fireblogsyt-2785f.firebaseapp.com",
    projectId: "fireblogsyt-2785f",
    storageBucket: "fireblogsyt-2785f.appspot.com",
    messagingSenderId: "607368098950",
    appId: "1:607368098950:web:54ed549e78997e36f8cd07"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();



