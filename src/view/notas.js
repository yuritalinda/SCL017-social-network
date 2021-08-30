import {feedUpdate , deletePost} from '../controller/view-controller.js'


export const notas = ()=>{


  const container = document.createElement('section');
  container.className = 'user-post-container';

 
  feedUpdate((querySnapshot) => {
    const userActive = firebase.auth().currentUser.email;
    
    container.innerHTML= '';
    querySnapshot.forEach((doc) => {

      let data = doc.data();

         container.innerHTML += `<div class="post-container">
          <div class="user-info">
          <img src="../Assets/imagenes/Avatar.svg" alt="avatar" class="img-avatar">
          <p class="user-name">${data.user}</p>
        </div>

        <div class="post-texto-container">
          <div class="post-texto">
            <p>${data.textNewNote}</p>
          </div>  



        <div class="nav-vertical">
        <a href="" class="likes" id="likes" ><img  src="../Assets/imagenes/likes.svg" alt="likes"></a>
        <a href="" class="comments" id="comments"><img  src="../Assets/imagenes/comments.svg" alt="comments"></a>
        
        </div>
      </div> 


        `;

      if (data.email ===  userActive){

        container.innerHTML += `
        <div class="nav-post">
        <button class="btn-editar" id="editarPost" value="${doc.id}" data-post="${(data.textNewNote)}" >editar</button>
        <button class="btn-borrar" data-id="${doc.id}" id="btn-borrar">borrar</button>
        </div>
        `;
      }


     });

     const btnsDelete = container.querySelectorAll(".btn-borrar");
     btnsDelete.forEach((btn) =>
      btn.addEventListener("click", async (e) => {
        try {
          await deletePost(e.target.dataset.id);
        } catch (error) {
          console.log(error);
        }
      }));


     const btnEditar=  document.querySelectorAll(".btn-editar");

     btnEditar.forEach((item)=>{
      console.log(item);
       const currentText = (item.dataset.post);
        console.log(item.dataset , currentText);
       console.log(currentText);

       item.addEventListener('click', ()=>{

         editarPost(item.value, currentText);
         
       })
     });

     const editarPost = (id, currentText) => {
      const db = firebase.firestore();

      const textNewNote = prompt('Ingresa el nuevo texto', currentText)
      if (textNewNote.trim().length === 0) {
          alert ("Rellena el campo solicitado")
      };
      
    
           return db.collection("notes").doc(id).update({
               textNewNote
          })
              .then(() => {
                  console.log("Exito");
              })
              .catch((error) => {
                console.log(textNewNote);
                  console.error("Error: ", error);
              });
      };
      


      

  });

 
 
  

;
    

  return container;

  

} 
