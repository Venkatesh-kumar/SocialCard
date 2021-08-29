import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import "./styles/style.css";
import "bootstrap/dist/css/bootstrap.css";
import firebase from "firebase"

var firebaseConfig = {
  apiKey: "AIzaSyDXJzQQ9GAhSYopYMIKuk5OCSgb1pKsPOI",
  authDomain: "socialcard-1d727.firebaseapp.com",
  databaseURL: "https://socialcard-1d727.firebaseio.com",
  projectId: "socialcard-1d727",
  storageBucket: "socialcard-1d727.appspot.com",
  messagingSenderId: "1048215312269",
  appId: "1:1048215312269:web:590f55d5df117732758fc4",
  measurementId: "G-BMH5LG8QJG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);




ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);


