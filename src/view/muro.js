//Importar las funciones del view controller que usaremos en el muro


export const muro = () =>{

  const container = document.createElement('main');

  const viewMuro= `
  <header class="header-container" id="header-container">
    <img src="../Assets/imagenes/Naturopolis-logo-muro.svg" alt="" class="logo">
    <h1 id="titulo-header" class="titulo-header">
      Naturópolis- Muro
    </h1>
    <a href="portada.js">
      <img src="../Assets/imagenes/Frame-icono logOut.svg" alt="logOut" class="botón-logOut">
    </a>
  </header>
  <section class="perfil-usuario" id="perfil-usuario">
    <img src="" alt="" class="avatar-usuario">avatar-usuario
    <h3 class="nombre-usuario" id="nombre-usuario">Nombre Apellido</h3>
  </section>
  <section class="post-container" id="post-container">
    esta seccion será otro archivo, puede que se divida en dos secciones
  </section>
  <footer class="crear-post-container" id="crear-post-container">
    <form action="">
      <textarea name="" id="" cols="30" rows="10" placeholder="¿Qué deseas compartir hoy?">
      </textarea>
      <button>
        <img src="" alt="">ENVIAR
      </button>
    </form>
  </footer>
  `;

  container.innerHTML = viewMuro;

  //eventos del muro:
  //click para los componentes
  //onLoad para la section de post
return container;
};