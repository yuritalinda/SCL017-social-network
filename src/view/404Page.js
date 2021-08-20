export const error = () => {

  const container = document.createElement('section');
  const viewError = 
  ` 
    <div class="error-header-container"> 
    <h1 class="error-titulo">Naturópolis</h1>
    <h3 class="error-texto">
      ¡UPS! Esta página no existe aún, estamos trabajado en ella.
    </h3>
    <br></br>
    <img src="../Assets/imagenes/Naturopolis-logo portada.svg" alt="logo" class="logo-portada">
    <p class="error">Puedes volver al <a id="inicio-link" href="#/">inicio</a> y comienza a disfrutar de una vida natural.</p>
    </div>
    `;

  

  container.innerHTML = viewError;


  return container;

};