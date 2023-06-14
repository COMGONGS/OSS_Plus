import Vue from 'vue';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, onSnapshot } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import 'firebase/database';
import firebaseConfig from './firebaseConfig';
import store from '../store';

const app = initializeApp(firebaseConfig);

// Get a reference to the Firebase services
const auth = getAuth(app);
const db = getFirestore(app);
auth.languageCode = 'ko';

let unsubscribe = null;

const subscribe = (fu) => {
  const ref = doc(collection(db, 'users'), fu.uid); // use db here
  unsubscribe = onSnapshot(ref, doc => {
    if (doc.exists()) {
      const user = doc.data();
      user.uid = fu.uid;
      if (!user.displayName) user.displayName = fu.displayName || '손님';
      if (!user.photoURL) user.photoURL = fu.photoURL || '/user.png';
      store.commit('setUser', user);
    }
  }, console.error);
}

onAuthStateChanged(auth, (fu) => { // use auth here
  store.commit('setFireUser', fu);
  if (!fu) {
    store.commit('setUser', null);
    if (unsubscribe) unsubscribe();
    return;
  }
  subscribe(fu);
});

Vue.prototype.$firebase = {
  auth: auth,
  db: db,
};
