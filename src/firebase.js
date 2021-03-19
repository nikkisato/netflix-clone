import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDqEGiZ5jlKRbWCZrTDolPUAFO5o1fifq0',
  authDomain: 'netflix-clone-6ec0c.firebaseapp.com',
  projectId: 'netflix-clone-6ec0c',
  storageBucket: 'netflix-clone-6ec0c.appspot.com',
  messagingSenderId: '238599568732',
  appId: '1:238599568732:web:b3d1fc62e63fe550539599',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
