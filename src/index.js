import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import firebase from 'firebase';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let config = {
    apiKey: "AIzaSyBh8uQwOaRwKFO1NbROeS4bDeVX3xVeby4",
    authDomain: "pseudogram-c991d.firebaseapp.com",
    databaseURL: "https://pseudogram-c991d.firebaseio.com",
    projectId: "pseudogram-c991d",
    storageBucket: "pseudogram-c991d.appspot.com",
    messagingSenderId: "791655357453"
  };
  firebase.initializeApp(config);

ReactDOM.render(
    <App />, 
    document.getElementById('root')
);
registerServiceWorker();
