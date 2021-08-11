

export const notas = ()=>{

  const container = document.createElement('section');
  container.className = 'user-post-container';
  const viewNotas = `
      <div class="user-info">
        <img src="../Assets/imagenes/Avatar.svg" alt="avatar" class="img-avatar">
        <p class="user-name">Nombre Apellido</p>
      </div>

      <div class="post-texto-container">
        <div class="post-texto">
          <p>Nori grape silver beet broccoli
          kombu beet greens fava bean
          potato quandong celery.</p>
        </div>  
      </div>

      <div class="nav-vertical">
       <a href="" class="likes" id="likes" ><img  src="../Assets/imagenes/likes.svg" alt="likes"></a>
       <a href="" class="comments" id="comments"><img  src="../Assets/imagenes/comments.svg" alt="comments"></a>
      
      </div>

  `;

  container.innerHTML = viewNotas;
  return container;
  

} 



  // <section id="post-container" class="post-container">
    
  // </section>
