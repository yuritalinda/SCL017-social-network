export const signIn = (email, password) => firebase.auth()
  .createUserWithEmailAndPassword(email, password);

export const logIn = (email, password) => firebase.auth()
  .signInWithEmailAndPassword(email, password);

export const saveUsers = () => {
  const user = firebase.auth().currentUser;
  firebase.firestore().collection('users').doc(user.uid).set({
    user: user.displayName,
    avatar: user.photoURL,
    uid: user.uid,
    email: user.email,
  });
};

export const googleLogin = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};


firebase.initializeApp(firebaseConfig);
let provider = new firebase.auth.GoogleAuthProvider(); 




