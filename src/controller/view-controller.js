//Este archivo maneja todas las funciones de firebase.js que se van a usar

import {
  signIn, logIn, googleLogin,
} from './firebase.js';

export const changeHash = (hash) => {
  location.hash = hash;
};
export const signInOnSubmit = () => { //funcion de registro manual
  const email = document.querySelector('#email-registro').value;
  const password = document.querySelector('#password-registro').value;
  signIn(email, password)
    // eslint-disable-next-line no-alert
    .then(() => alert('Datos Guardados'), changeHash('#/'))
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
    });
};

export const loginWithGoogle = () => {
  googleLogin().then(() => {
    changeHash('/#home');
    saveUsers();
  });
};

export const logInOnSubmit = () => { //funcion de logueado manual
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  logIn(email, password)
    .then(() => changeHash('/#home'))
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
    });
};

// export const signOutSubmit = () => {
//   signOut().then(() => {
//     changeHash('/logIn');
//     alert('Cerrando sesión');
//   }).catch((error) => {
//     const errorMessage = error.message;
//     alert(errorMessage);
//   });
// };