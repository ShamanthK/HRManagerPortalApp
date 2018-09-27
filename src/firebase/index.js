//import * as auth from './auth';
//import * as firebase from './firebase';
/*import {auth, db} from './firebase';
export {
  auth,
  db
};*/

import firebase from 'firebase';
import 'firebase/storage';

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

firebase.initializeApp(devConfig);

const storage = firebase.storage();

export {
    storage, firebase as default
}
/*
const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;


  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  const auth = firebase.auth();
  const db = firebase.database();

  export {
    auth,
    db
  };*/
