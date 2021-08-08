import {portadaLogin} from '../view/portada.js';
import {registro} from '../view/registro.js';
import {error} from '../view/404Page.js';
import {muro} from '../view/muro.js';

export const cambioRuta = (hash) =>{

  if (hash === '#/'){
    return mostrarVistas(hash);
  } else if (hash === '#/registro'){
      return mostrarVistas(hash);
  } else if (hash === '#/#home'){
      return mostrarVistas(hash);
  }
    else return mostrarVistas(hash); //esto me retorna el ultimo valor de la variable hash
  };
  

  const mostrarVistas = (hash) =>{
    const containerRoot = document.getElementById('root');
    containerRoot.innerHTML = '';

    switch (hash)  {
      case '#/' : containerRoot.appendChild(portadaLogin());
      break;
      case '#/registro' : containerRoot.appendChild(registro());
      break;
      case '#/#home' : containerRoot.appendChild(muro());
      break
      default : containerRoot.appendChild(error());
    }

}
