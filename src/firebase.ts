import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCtRwhol8uI3Oy9F7u-_D-5JCtoSVK76tI',
  authDomain: 'demos-202b0.firebaseapp.com',
  projectId: 'demos-202b0',
  storageBucket: 'demos-202b0.appspot.com',
  messagingSenderId: '620091743679',
  appId: '1:620091743679:web:3c63048f45f737e615150a'
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// export const firebaseAuthEmulator = 'http://127.0.0.1:9099';
// if (import.meta.env.DEV) {
//   firebase.auth().useEmulator(firebaseAuthEmulator);
// }