import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDF8vzupNjYkkxsBwuyhZi4jjthXmKp2A0",
    authDomain: "slack-clone-61359.firebaseapp.com",
    projectId: "slack-clone-61359",
    storageBucket: "slack-clone-61359.appspot.com",
    messagingSenderId: "97987457004",
    appId: "1:97987457004:web:fc215f0bc7f980d72a9ac9"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {db,auth,provider};
  