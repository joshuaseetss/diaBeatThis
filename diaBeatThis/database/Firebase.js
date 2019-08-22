import React, { Component } from 'react';
import * as firebase from "firebase";
import "firebase/firestore";

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
    static registrationInfo = {
        displayName: '',
        email: '',
    }




    static writeUserData(email, displayName) {
        //get the current user
        var user = firebase.auth().currentUser

        //enter the users data into the database
        firebase.database().ref('Users/' + user.uid).set({
            name: displayName,
            email: email,

        }).then((data) => {
            //success callback 
            console.log('data', data)
            alert('Account is created!');
        }).catch((error) => {
            //error callback
            console.log('error', error);
            alert(error);
        })
    }

    static fetchList() {
        //get the current user
        var user = firebase.auth().currentUser
        var uid = user.uid;
        self.loaderTrue();
        var list = [];
        ref = firebase.database().ref(`Users/${uid}/memo`);
        ref.once('value', snapshot => {
            if (snapshot.exists()) {
                ref = firebase.database().ref(`Users/${uid}/memo`);

                ref.once('value', snapshot => {
                    snapshot.forEach(item => {

                        list.push(item.val());

                        if (snapshot.numChildren() == list.length) {
                            this.addList(list);
                            self.loaderFalse();
                        }
                    });
                });
            }
        });
    }

    static addPost(glucoseLevel, food, comments) {
        var user = firebase.auth().currentUser

        firebase.database().ref('Users/' + user.uid + '/posts').set({
            glucoseLevel: glucoseLevel,
            food: food,
            comments: comments,
            time: firebase.database.ServerValue.TIMESTAMP

        }).then((data) => {
            //success callback 
            console.log('data', data)
            alert('Posted!');
        }).catch((error) => {
            //error callback
            console.log('error', error);
            alert(error);
        })
    }

    static readUserData() {
        var user = firebase.auth().currentUser
        firebase.database().ref('Users/' + user.uid).once('value', function (snapshot) {
            console.log(snapshot.val())
        });
    }

    static updateEmail(email) {
        var user = firebase.auth().currentUser

        firebase.database().ref('Users/' + user.uid).update({
            email,
        });
    }

    // Initialize Firebase
    static init() {
        firebase.initializeApp(firebaseConfig);
        Firebase.auth = firebase.auth();
        Firebase.firestore = firebase.firestore();
        Firebase.storage = firebase.storage();
    }


}