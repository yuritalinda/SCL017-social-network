import { viewPortada } from '../view/portada.js';
import { viewRegistro } from '../view/registro.js';

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

  // containerRoot.innerHTML = viewPortada();

  switch (hash) {
    case '#/' : containerRoot.appendChild(viewPortada);
    break;
    case '#/registro' : containerRoot.appendChild(viewRegistro);
    break;
    default : console.log('no existessssssssss');
  }

}


