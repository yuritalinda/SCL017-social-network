//Importar las funciones del view controller que usaremos en el muro
import {notas} from  './notas.js';


export const muro = () =>{

  const container = document.createElement('section');
  container.className = 'muro';

  const viewMuro= `
  <header class="header-container" id="header-container">
    <img src="../Assets/imagenes/Naturopolis-logo-muro.svg" alt="logo" class="logo">
    <h1 id="titulo-header" class="titulo-header">
      Naturópolis
    </h1>
    <a href="portada.js">
      <img src="../Assets/imagenes/Frame-icono-logOut.svg" alt="logOut" class="botón-logOut">
    </a>
  </header>

  <section class="perfil-usuario" id="perfil-usuario">
    <img src="../Assets/imagenes/Avatar.svg" alt="" class="avatar-usuario">
    <h3 class="nombre-usuario-perfil" id="nombre-usuario">Nombre Apellido</h3>
  </section>

  <section class="crear-post" id="crear-post">
    <form action="">
      <textarea name="" id="texto-input" class="texto-input" cols="30" rows="5">
      Nori grape silver beet broccoli
      kombu beet greens fava bean
      potato quandong celery.
      </textarea>
      <button type="submit"class="btn-send" id="btn-send">
        <img src="../Assets/imagenes/send.svg" alt="send">
      </button>
    </form>
  </section>


  `;

  container.innerHTML = viewMuro;

// Usamos INSERTBEFORE para agregar el archivo notas.js
  const crearPost = container.querySelector('#crear-post');
  container.insertBefore(notas() , crearPost);

return container;
};
