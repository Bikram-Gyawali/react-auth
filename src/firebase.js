import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCRiznT4SpWsQpKSOtqq2Hz3H8feAjwRG4",
  authDomain: "react-auth-production-43a59.firebaseapp.com",
  databaseURL: "https://react-auth-production-43a59.firebaseio.com",
  projectId: "react-auth-production-43a59",
  storageBucket: "react-auth-production-43a59.appspot.com",
  messagingSenderId: "311396349147",
  appId: "1:311396349147:web:afd09996c3f64a5c60c8fe",
});
// Initialize Firebase
// firebase.initializeApp(app);

// const app = firebase.initializeApp({
//   // apiKey: "AIzaSyCJZ1JcG36ZgNetm7jEiesgYTCYgUR7",
//   // authDomain: "react-auth-development-1ce02.firebaseapp.com",
//   // databaseURL: "https://react-auth-development-1ce02.firebaseio.com",
//   // projectId: "react-auth-development-1ce02",
//   // storageBucket: "react-auth-development-1ce02.appspot.com",
//   // messagingSenderId: "850677077180",
//   // appId: "1:850677077180:web:9bb838d98dd641d8f62cb9",
//   // measurementId: "G-32D5HXMJ3D",

//   apiKey: "AIzaSyCRiznT4SpWsQpKSOtqq2Hz3H8feAjwRG4",
//   // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APp_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
// });

export const auth = app.auth();
export default app;
