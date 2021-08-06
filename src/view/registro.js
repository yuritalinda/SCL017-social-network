import {signInOnSubmit , loginWithGoogle} from '../controller/view-controller.js';


export const registro = () =>{

  const container = document.createElement('section');
  const viewRegistro = 
  `
  <div class="portada-header-container">
  <h1 class="portada-titulo">Naturópolis</h1>
  <p class="portada-texto">
        ¡Bienvenida! Regístrate para acceder a tu muro.
      </p>

      <img src="../Assets/imagenes/Naturopolis-logo portada.svg" alt="logo" class="logo-portada">
    </div>

  <div class="formulario-registro-container" id="formulario-registro-container">
  <h2 class="registro-titulo">Regístrate</h2>
    <form action="#" method="post" id="form-registro" class="form-registro">
      <input type="email" name="email-registro" id="email-registro"  class="email" placeholder="tucorreo@correo.com" value="">
      <input type="password" name="password-registro" id="password-registro" class="password" placeholder="contraseña" value="">
        <h4>Puedes hacer registro manual o puedes acceder con tu cuenta de Google</h4>

        
          <!-- Botón switch registro -->

      <div class="container-boton">
        <div class="switch">
          <input type="radio" class="switch-input" name="view" id="registro">
          <label for="registro" class="switch-label switch-label-off">registro</label>

          <input type="radio" class="switch-input" name="view" value="google-btn" id="google-btn" checked>
          <label for="google-btn" class="switch-label switch-label-on">
            <img class="logo-google" src="./Assets/imagenes/flat-color-icons_google.svg" alt="google">
          </label>
          <span class="switch-selection"></span>
        </div>
      </div>
    </form>

    <p class="registrate">¿ya tienes cuenta? Entonces <a href="#/">haz login</a> y comienza a disfrutar de una vida natural.</p>
  </div>

  `;

  container.innerHTML = viewRegistro;


  const btnRegistro = container.querySelector('#registro');
  btnRegistro.addEventListener('click', ()=>{
    
    signInOnSubmit();
  });

  const btnGoogle = container.querySelector('#google-btn');
  btnGoogle.addEventListener('click' , loginWithGoogle);


  return container;

};
