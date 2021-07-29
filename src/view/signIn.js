  
import { signInOnSubmit } from '../view-controller.js';

export default () => {
  const form= document.createElement('form');
  const formContent = `
  <section class="registro-container hide" id="registro-container">
  <div class="registro-header-container">
    <h1 class="registro-titulo">¿Quieres registrarte?</h1>
    <p class="registro-texto">
      Puedes hacerlo manualmente o con tu cuenta de Google, 
      luego recibirás un correo de verificación y listo!
    </p>

    <img src="./Assets/imagenes/Naturopolis-logo Registro.svg" alt="logo" class="registro-logo">
  </div>

  <div class="formulario-registro-container" id="formulario-registro-container">
    <form action="#" method="post" id="form-registro" class="form-registro">
      <input type="email" name="email-registro" id="email-registro"  class="email-registro" placeholder="tucorreo@correo.com" value="">
      <input type="password" name="password-registro" id="password-registro" class="password-registro" placeholder="hagáse una clave wena" value="">
      
          <!-- Botón switch registro -->

      <div class="container-boton">
        <div class="switch">
          <input type="radio" class="switch-input" name="view" value="registrame" id="registrame" checked>
          <label for="registrame" class="switch-label switch-label-off">Registro</label>
          <input type="radio" class="switch-input" name="view" value="google-btn" id="google-btn">
          <label for="google-btn" class="switch-label switch-label-on">
            <img src="./Assets/imagenes/flat-color-icons_google.svg" alt="google">
          </label>
          <span class="switch-selection"></span>
        </div>
      </div>
    </form>
  </div>
</section>

  `;
  section.innerHTML = sectionContent;

  // selecccionando elementos del DOM
  const btnSignIn = form.querySelector('#btn-signIn');
  btnSignIn.addEventListener('click', signInOnSubmit);
  return form;
};

export default () => {
    const form = document.createElement('form');
    const formContent = `
     <div class = "container-form">
      <form class="formulario">
        <h2>Regístrate</h2>
          <input type="email" class="txt-form" id="email" placeholder = "Ingrese E-mail">
          <input type="password" class="txt-form" id="password" placeholder = "Ingrese Contraseña">
        <button class="btn-form" id="btn-signIn" type="button"> Enviar </button>
        <p>¿Ya tienes cuenta?</p>
        <a href="#/LogIn"> Inicia sesión aquí </a>
      </form>
      </div>
    `;
    form.innerHTML = formContent;
  
    // selecccionando elementos del DOM
    const btnSignIn = form.querySelector('#btn-signIn');
    btnSignIn.addEventListener('click', signInOnSubmit);
    return form;
  };