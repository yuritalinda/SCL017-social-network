
//Importar las funciones del view controller que usaremos en el muro



import {signOutSubmit,addNoteOnSubmit} from '../controller/view-controller.js';

export const muro = () =>{

  const container = document.createElement('section');
  const user=firebase.auth().currentUser;
  container.className = 'muro';


  const viewMuro= `
  <header class="header-container" id="header-container">
    <img src="../Assets/imagenes/Naturopolis-logo-muro.svg" alt="logo" class="logo">
    <h1 id="titulo-header" class="titulo-header">
      Naturópolis
    </h1>
    <button class="btn-signOut"id="btn-signOut">
      <img src="../Assets/imagenes/Frame-icono-logOut.svg" alt="logOut" class="botón-logOut">
    </button>
  </header>
  <section class="perfil-usuario" id="perfil-usuario">
    <img src="${user.photoURL}" alt="" class="avatar-usuario">
    <h3 class="nombre-usuario-perfil" id="nombre-usuario">${user.displayName}</h3>
  </section>
  <section class="crear-post" id="section-post">
  <!-- Tasks List -->
  <div class="col-md-6" id="tasks-container"></div>
    <form id="form">
      <textarea name="" id="text-input" class="texto-input" cols="30" rows="5" >
    
      </textarea>
      <button type="submit" class="btn-send" id="btn-send">
        <img src="../Assets/imagenes/send.svg" alt="send">
      </button>
    </form>
  </section>
  `;

  container.innerHTML = viewMuro;

    
    const signOutBtn = container.querySelector('#btn-signOut');
    signOutBtn.addEventListener('click' , ()=>{
      signOutSubmit();
    });
    const formulario=container.querySelector('#form');
    formulario.addEventListener('submit',(event)=>{
      event.preventDefault();
      //console.log(event.input.value);
      const textarea=container.querySelector('#text-input');
      console.log(textarea.value);
      addNoteOnSubmit(textarea.value);

    });
    // const buttonAddNote = container.querySelector('#btn-send');
    // buttonAddNote.addEventListener('onsubmit', (event)=>{

// Usamos INSERTBEFORE para agregar el archivo notas.js
  const crearPost = container.querySelector('#crear-post');
  container.insertBefore(notas() , crearPost);
  
  const signOutBtn = container.querySelector('#btn-signOut');
  signOutBtn.addEventListener('click' , ()=>{
    signOutSubmit();
  });


  
  
  return container;
  };