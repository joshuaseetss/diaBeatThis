import React, { Component } from 'react';
import * as firebase from "firebase";

const firebaseConfig = {
        apiKey: "AIzaSyA0Du6Emw6ZuN9RTJkhk2Mvc1-6f0Dh-zg",
        authDomain: "diabeatthis-ead81.firebaseapp.com",
        databaseURL: "https://diabeatthis-ead81.firebaseio.com",
        projectId: "diabeatthis-ead81",
        storageBucket: "diabeatthis-ead81.appspot.com",
        messagingSenderId: "122494668373",
        appId: "1:122494668373:web:9ec6702aab417769"
    };


  
export class Firebase extends Component {
    
    static auth;
    static registrationInfo ={ 
        displayName: '',
        email: '',
    }

    // Initialize Firebase
    static init() {
        firebase.initializeApp(firebaseConfig);
        Firebase.auth = firebase.auth(); 
    }


}