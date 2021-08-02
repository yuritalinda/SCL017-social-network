 import { logInOnSubmit, loginWithGoogle} from '../view-controller.js';


export default () => {
  const formLogin = document.createElement('form');
  const formContent = `
  <div class="portada-header-container">
    <h1 class="portada-titulo">Naturópolis</h1>
    <p class="portada-texto">
      ¡Bienvenida! Haz login para acceder a tu muro.
    </p>
    <img src="./Assets/imagenes/Naturopolis-logo-vistas.svg" alt="logo" class="logo-portada">
  </div>
  <div class="formulario-login-container" id="formulario-login-container">
    <form action="#" method="post" id="form-login" class="form-login">
      <input type="email" name="email-login" id="email-login"  class="email-login" placeholder="tucorreo@correo.com" value="">
      <input type="password" name="password-login" id="password-login" class="password-login" placeholder="contraseña" value="">
        <h4>Puedes hacer login manual o puedes acceder con tu cuenta de Google</h4>
          <!-- Botón switch login -->
      <div class="container-boton">
        <div class="switch">
          <input type="radio" class="switch-input" name="view" value="login" id="btn-login" checked>
          <label for="registrame" class="switch-label switch-label-off">login</label>
          <input type="radio" class="switch-input" name="view" value="google-btn" id="google-btn">
          <label for="google-btn" class="switch-label switch-label-on">
            <img class="logo-google" src="./Assets/imagenes/flat-color-icons_google.svg" alt="google">
          </label>
          <span class="switch-selection"></span>
        </div>
      </div>
    </form>
    <p class="registrate">¿No tienes cuenta? Entonces <a href="#/SigIn">registrate</a> y comienza a disfrutar de una vida natural</p>
  </div>
    `;
    const btnLogIn = formLogin.querySelector('#btn-login');
    btnLogIn.addEventListener('click', logInOnSubmit);
    const btnLogInGoogle = formLogin.querySelector('#google-btn');
    btnLogInGoogle.addEventListener('click', loginWithGoogle);
    
    return formLogin;

};
