import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyDt4jvBL4v6k0xiuJzuEzTgEd7q01vwU1I',
  authDomain: 'guild-demo-eb7c1.firebaseapp.com',
  databaseURL: 'https://guild-demo-eb7c1.firebaseio.com',
  projectId: 'guild-demo-eb7c1',
  storageBucket: 'guild-demo-eb7c1.appspot.com',
  messagingSenderId: '701769576781',
  appId: '1:701769576781:web:48f9e97a9a5ec8ee'
};

firebase.initializeApp(firebaseConfig);

export const gridRef = firebase.database().ref('grid');
