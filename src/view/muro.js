//Importar las funciones del view controller que usaremos en el muro
import {notas} from  './notas.js';


export const muro = () =>{

  const container = document.createElement('section');

  const viewMuro= `
  <header class="header-container" id="header-container">
    <img src="../Assets/imagenes/Naturopolis-logo-muro.svg" alt="logo" class="logo">
    <h1 id="titulo-header" class="titulo-header">
      Naturópolis
    </h1>
    <a href="portada.js">
      <img src="../Assets/imagenes/Frame- icono logOut.svg" alt="logOut" class="botón-logOut">
    </a>
  </header>
  <section class="perfil-usuario" id="perfil-usuario">
    <img src="../Assets/imagenes/avatar-usuario-logueado.svg" alt="" class="avatar-usuario">avatar-usuario
    <h3 class="nombre-usuario-perfil" id="nombre-usuario">Nombre Apellido</h3>
  </section>
  <section class="post-container" id="post-container">
      <section class="texto-post" id="texto-post">
      </section>

  </section>
  <footer class="crear-post-container" id="crear-post-container">
    <form action="">
      <textarea name="" id="" cols="30" rows="10" placeholder="¿Qué deseas compartir hoy?">
      </textarea> escribe aca tu post
      <button>
        <img src="" alt="">ENVIAR
      </button>
    </form>
  </footer>
  `;

  container.innerHTML = viewMuro;

  const notasContainer = container.querySelector('#post-container');
  notasContainer.appendChild(notas());

  //eventos del muro:
  //click para los componentes
  //onLoad para la section de post
return container;
};
