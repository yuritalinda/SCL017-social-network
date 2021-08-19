//Este archivo maneja todas las funciones de firebase.js que se van a usar

import {signIn, logIn, googleLogin, saveUsers, signOut,addNote} from './firebase.js';

export const changeHash = (hash) => {
  location.hash = hash;
};
export const signInOnSubmit = () => { //funcion de registro manual
  const email = document.getElementById("email-registro").value;
  const password = document.getElementById("password-registro").value;
  
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
    changeHash('/home');
    saveUsers();
  });
};

export const logInOnSubmit = () => { //funcion de logueado manual
  const email = document.getElementById("email-login").value;
  const password = document.getElementById("password-login").value; 

  console.log(email, password);

  logIn(email, password)
    .then(() => changeHash('/home'))
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
export const addNoteOnSubmit = (event) => {
  event.preventDefault();
  const textNewNote = document.getElementById('texto-input');
 
  if (textNewNote.value === '') {
    alert('Campos vacíos');
  } else {
    addNote(textNewNote.value)
      .then((docRef) => {
        textNewNote.value = '';
        console.log('Document written with ID: ', docRef.id);
      }).catch((error) => {
        textNewNote.value = '';
        console.error('Error adding document: ', error);
      });
  }
};
// export const editNoteOnSubmit = (objNote) => {
//   const input = document.getElementById('input-edit-note');
//   editNote(input.value, objNote)
//     .then(() => {
//       console.log('Document successfully updated');
//     }).catch((error) => {
//       console.error('Error updating document: ', error);
//     });
// };
// export const deleteNoteOnClick = (objNote) => deleteNote(objNote.id);