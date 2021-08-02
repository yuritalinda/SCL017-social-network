import { initRouter } from './router.js';

const init = () => {
  myFunction();
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBkgF4b369LZmj3he96ND0ifUrmzaTLgy0",
    authDomain: "scl017-naturopolis.firebaseapp.com",
    projectId: "scl017-naturopolis",
    storageBucket: "scl017-naturopolis.appspot.com",
    messagingSenderId: "1077091569476",
    appId: "1:1077091569476:web:69bd54cde4e96cb25d5111"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  initRouter();
};
window.onload = init();