import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCsr-QuOiq9PUqUpwoK_GS5EXXVuB-VLLY',
  authDomain: 'react-next-material-ui.firebaseapp.com',
  projectId: 'react-next-material-ui',
  storageBucket: 'react-next-material-ui.appspot.com',
  messagingSenderId: '943280054410',
  appId: '1:943280054410:web:dfca0adfcce799dd448d73',
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
