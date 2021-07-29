// Este es el punto de entrada de tu aplicacion

// Este es el punto de entrada de tu aplicacion

import { initRouter } from './router.js';
/*import { myFunction } from './lib/index.js';

myFunction();*/
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBkgF4b369LZmj3he96ND0ifUrmzaTLgy0",
    authDomain: "scl017-naturopolis.firebaseapp.com",
    projectId: "scl017-naturopolis",
    storageBucket: "scl017-naturopolis.appspot.com",
    messagingSenderId: "1077091569476",
    appId: "1:1077091569476:web:69bd54cde4e96cb25d5111"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
let provider = new firebase.auth.GoogleAuthProvider(); 



const inicioSesionGoogle=()=>{
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;
  
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
}

let buttonInicioSesionGoogle=document.getElementById("google-btn");
buttonInicioSesionGoogle.addEventListener("click", inicioSesionGoogle, false);