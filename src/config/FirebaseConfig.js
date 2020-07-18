import Firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyC6kbPIJAot_eztn9m9ErW5J_ixWXQB9ts",
  authDomain: "etrinco-77984.firebaseapp.com",
  databaseURL: "https://etrinco-77984.firebaseio.com",
  projectId: "etrinco-77984",
  storageBucket: "etrinco-77984.appspot.com",
  messagingSenderId: "735540092540",
  appId: "1:735540092540:web:488be32d0be441f4f273f9",
  measurementId: "G-HZN0HBZPL6"
};
let app = Firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export const db = app.database();
