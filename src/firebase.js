import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCFxvN6wvgvO5voHDMFoZhu4ZSJXRdLJJ0",
  authDomain: "slack-51ffa.firebaseapp.com",
  projectId: "slack-51ffa",
  storageBucket: "slack-51ffa.appspot.com",
  messagingSenderId: "463868536797",
  appId: "1:463868536797:web:c5ca6381c9447cebfcb834"
};

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {db,auth,provider};