import * as firebase from 'firebase';

//import firebase from 'firebase/app';
//import 'firebase/storage';

// Initialize Firebase
  const prodConfig = {
      apiKey: "AIzaSyCItthTSRaT8_Jt1vqmMknYOTJdCalFnFY",
      authDomain: "hrmanagerapp-ae345.firebaseapp.com",
      databaseURL: "https://hrmanagerapp-ae345.firebaseio.com",
      projectId: "hrmanagerapp-ae345",
      storageBucket: "hrmanagerapp-ae345.appspot.com",
      messagingSenderId: "16989206440"
  };

  const devConfig = {
    apiKey: "AIzaSyCItthTSRaT8_Jt1vqmMknYOTJdCalFnFY",
    authDomain: "hrmanagerapp-ae345.firebaseapp.com",
    databaseURL: "https://hrmanagerapp-ae345.firebaseio.com",
    projectId: "hrmanagerapp-ae345",
    storageBucket: "hrmanagerapp-ae345.appspot.com",
    messagingSenderId: "16989206440"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;


  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  const auth = firebase.auth();
  const db = firebase.database();



  export {
    auth, db as default
  };
