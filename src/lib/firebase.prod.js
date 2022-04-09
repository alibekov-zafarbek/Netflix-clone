import Firebase from "firebase/app/";
import 'firebase/firestore';
import 'firebase/auth/';
// import {seedDatabase} from '../seed';


const config = {
  apiKey: "AIzaSyDXzYOoEimxPQ-3qgUbeX8oR7dzpXeAHL8",
  authDomain: "fir-portfolio-41b9d.firebaseapp.com",
  projectId: "fir-portfolio-41b9d",
  storageBucket: "fir-portfolio-41b9d.appspot.com",
  messagingSenderId: "250941813845",
  appId: "1:250941813845:web:41f1741be792bd315c50dc"
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase};
