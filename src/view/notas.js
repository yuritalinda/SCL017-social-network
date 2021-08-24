import {feedUpdate , deletePost} from '../controller/view-controller.js'


export const notas = ()=>{

  const container = document.createElement('section');
  container.className = 'user-post-container';

 
  feedUpdate((querySnapshot) => {
    container.innerHTML= '';
    querySnapshot.forEach((doc) => {
        const data = doc.data();

         container.innerHTML += `<div class="post-container">
          <div class="user-info">
          <img src="../Assets/imagenes/Avatar.svg" alt="avatar" class="img-avatar">
          <p class="user-name">${data.user}</p>
        </div>

        <div class="post-texto-container">
          <div class="post-texto">
            <p>${data.textNewNote}</p>
          </div>  

          <div class="nav-post">
          <button class="btn-editar" id="btn-editar">editar</button>
          <button class="btn-borrar" data-id="${doc.id}" id="btn-borrar">borrar</button>
          </div>
        </div>



        <div class="nav-vertical">
        <a href="" class="likes" id="likes" ><img  src="../Assets/imagenes/likes.svg" alt="likes"></a>
        <a href="" class="comments" id="comments"><img  src="../Assets/imagenes/comments.svg" alt="comments"></a>
        
        </div>
      </div> 
        `;

        const btnsDelete = container.querySelectorAll(".btn-borrar");
          btnsDelete.forEach((btn) =>
            btn.addEventListener("click", async (e) => {
              try {
                await deletePost(e.target.dataset.id);
              } catch (error) {
                console.log(error);
              }
            })
    );



    });
    

    
    
  });

 
 
  

;
    

  return container;

  

} 

