  
// Este es el punto de entrada de tu aplicacion

import { cambioRuta } from './controller/router.js';
import {portadaLogin} from './view/portada.js';

 document.getElementById('root').appendChild(portadaLogin());




const init = () =>{


  window.addEventListener('hashchange' , ()=>{ 
    cambioRuta(window.location.hash);
  })
};





