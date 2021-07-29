// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import { cambioRuta } from './controller/router.js';
import registro from './view/registro.js';
import portada from './view/portada.js';



document.getElementById('root').innerHTML = portada;

const init = () =>{
  window.addEventListener('hashchange' , ()=>{
    myFunction();
    console.log(window.location.hash);
    cambioRuta(window.location.hash);

  })
};

window.addEventListener('load', init);



// let provider = new firebase.auth.GoogleAuthProvider(); 



// const inicioSesionGoogle=()=>{
//     firebase.auth()
//     .signInWithPopup(provider)
//     .then((result) => {
//       /** @type {firebase.auth.OAuthCredential} */
//       var credential = result.credential;
  
//       // This gives you a Google Access Token. You can use it to access the Google API.
//       var token = credential.accessToken;
//       // The signed-in user info.
//       var user = result.user;
//       // ...
//     }).catch((error) => {
//       // Handle Errors here.
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       // The email of the user's account used.
//       var email = error.email;
//       // The firebase.auth.AuthCredential type that was used.
//       var credential = error.credential;
//       // ...
//     });
// }

// let buttonInicioSesionGoogle=document.getElementById("google-btn");
// buttonInicioSesionGoogle.addEventListener("click", inicioSesionGoogle, false);

