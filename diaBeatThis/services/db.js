import * as firebase from 'firebase';

 let config = {
    apiKey: "AIzaSyA0Du6Emw6ZuN9RTJkhk2Mvc1-6f0Dh-zg",
    authDomain: "diabeatthis-ead81.firebaseapp.com",
    databaseURL: "https://diabeatthis-ead81.firebaseio.com",
    projectId: "diabeatthis-ead81",
    storageBucket: "diabeatthis-ead81.appspot.com",
    messagingSenderId: "122494668373",
    appId: "1:122494668373:web:9ec6702aab417769"
  };
let app = firebase.initializeApp(config);
export const db = app.database();