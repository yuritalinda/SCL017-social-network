//Este archivo maneja todas las funciones de firebase.js que se van a usar

import {
  signIn, logIn, googleLogin, signOut , saveUsers
} from './firebase.js';


firebase.auth().onAuthStateChanged((user) => {
  if (user) {

    console.log(user , 'estamos logueados');

  } else {
     
    console.log(user , 'NO estamos logueados');
    

  }
});

export const changeHash = (hash) => {
  location.hash = hash;
};
export const signInOnSubmit = () => { //funcion de registro manual
  const email = document.getElementById("email-registro").value;
  const password = document.getElementById("password-registro").value;
  
  signIn(email, password)
    .then((userCredential) => {
      let user = userCredential.user;
      console.log(user);
      saveUsers();
      alert('Datos Guardados');
      changeHash('#/');

    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
    });
};

export const loginWithGoogle = () => {
  googleLogin().then(() => {
    changeHash('/home');
    saveUsers();
    
  });
};

export const logInOnSubmit = () => { //funcion de logueado manual
  const email = document.getElementById("email-login").value;
  const password = document.getElementById("password-login").value; 


  logIn(email, password)
    .then(() =>  {
      saveUsers();
      changeHash('/home');

    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
      
    });
};

export const signOutSubmit = () => {
  signOut().then(() => {
    changeHash('#/');
    alert('Cerrando sesión');
  }).catch((error) => {
    const errorMessage = error.message;
    alert(errorMessage);
  });
};