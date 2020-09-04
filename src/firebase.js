
  import firebase from 'firebase';

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBWxCsNZsEGqV3_Qo0YJpuqWGiNUkn0fMI",
    authDomain: "react-todo-87f52.firebaseapp.com",
    databaseURL: "https://react-todo-87f52.firebaseio.com",
    projectId: "react-todo-87f52",
    storageBucket: "react-todo-87f52.appspot.com",
    messagingSenderId: "379298121718",
    appId: "1:379298121718:web:e9ddb7eecd43d8c0d7a9d7",
    measurementId: "G-MXQKKTYHLT"
  })

  const db = firebaseApp.firestore();
//   const auth = firebase.auth();


  export default db;