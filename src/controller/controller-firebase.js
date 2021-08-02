export const signIn = (email, password) => firebase.auth()
  .createUserWithEmailAndPassword(email, password);

export const logIn = (email, password) => firebase.auth()
  .signInWithEmailAndPassword(email, password);


export const googleLogin = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};


firebase.initializeApp(firebaseConfig);
let provider = new firebase.auth.GoogleAuthProvider(); 








