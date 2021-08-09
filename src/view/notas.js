

export const notas = ()=>{

  const container = document.createElement('div');
  const viewNotas = `
  <div class="user-post-container">
      <div class="user-info">
        <img src="" alt="">avatar
        <p class="user-name">Nombre Apellido</p>
      </div>

      <div class="post-texto">
        <textarea name="" id="" cols="30" rows="10">acá va el texto</textarea>
      </div>

      <div class="nav-vertical">
        <ul>
          <li>Likes</li>
          <li>comentarios</li>
        </ul>
      </div>
    </div>
  `;

  container.innerHTML = viewNotas;
  return container;
  

} 



  // <section id="post-container" class="post-container">
    
  // </section>
