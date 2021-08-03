import {portadaLogin} from '../view/portada.js';
import {registro} from '../view/registro.js';

export const cambioRuta = (hash) =>{

  if (hash === '#/'){
    return mostrarVistas(hash);
  } else if (hash === '#/registro'){
      return mostrarVistas(hash);
    }
    else return mostrarVistas(hash);
  };
  

  const mostrarVistas = (hash) =>{
    const containerRoot = document.getElementById('root');
    containerRoot.innerHTML = '';

    switch (hash)  {
      case '#/' : containerRoot.appendChild(portadaLogin());
      break;
      case '#/registro' : containerRoot.appendChild(registro());
      break;
      default : console.log('no existessssssssss, hacer vista 404');
    }

}


