import {
    signIn, logIn, googleLogin,
  } from './controller/controller-firebase.js';
  
  const changeHash = (hash) => {
    location.hash = hash;
  };
  export const signInOnSubmit = () => {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    signIn(email, password)
      // eslint-disable-next-line no-alert
      .then(() => alert('Datos Guardados'), changeHash('/logIn'))
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
  
  export const loginWithGoogle = () => {
    googleLogin().then(() => {
      changeHash('/Home');
      saveUsers();
    });
  };