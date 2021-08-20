export const signIn = (email, password) => firebase.auth()
  .createUserWithEmailAndPassword(email, password);

export const logIn = (email, password) => firebase.auth()
.signInWithEmailAndPassword(email, password);


export const googleLogin = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};
const db=firebase.firestore();

export const saveUsers = () => {
  const user = firebase.auth().currentUser;

  db.collection('users').doc(user.uid).set({

    user: user.displayName,
    avatar: user.photoURL,
    uid: user.uid,
    email: user.email,
  });
};

export const signOut = () => firebase.auth().signOut();

export const addNote = (textNewNote) => {
  console.log(textNewNote);
  db.collection('notes').add({
  textNewNote,
  
  })
  .then(resp =>{
    console.log(resp);

  })
  .catch(error=>{
    console.log(error);

  })

}
