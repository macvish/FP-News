import * as firebase from 'firebase'
import '@firebase/auth'
import '@firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCU335Z4g_eVCgyTACgYWOmpkcTM824HF8',
  authDomain: 'fp-news-de4fa.firebaseapp.com',
  databaseURL: 'fp-news-de4fa.firebaseio.com',
  projectId: 'fp-news-de4fa',
  storageBucket: 'fp-news-de4fa.appspot.com',
  messagingSenderId: '12345-insert-yourse',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export { firebaseApp }
