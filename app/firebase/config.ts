import { Platform } from 'react-native'
import firebase from '@react-native-firebase/app'

import { FirebaseAppOptions } from '../lib/models'

const androidCredentials = {
  apiKey: 'AIzaSyCU335Z4g_eVCgyTACgYWOmpkcTM824HF8',
  authDomain: 'fp-news-de4fa.firebaseapp.com',
  databaseURL: 'fp-news-de4fa.firebaseio.com',
  projectId: 'fp-news-de4fa',
  storageBucket: 'fp-news-de4fa.appspot.com',
  appId: '1:779939245876:android:492c676e8324be1ce9ff61',
  messagingSenderId: '779939245876',
}

const iosCredentials = {
  apiKey: 'AIzaSyCU335Z4g_eVCgyTACgYWOmpkcTM824HF8',
  authDomain: 'fp-news-de4fa.firebaseapp.com',
  databaseURL: 'fp-news-de4fa.firebaseio.com',
  projectId: 'fp-news-de4fa',
  storageBucket: 'fp-news-de4fa.appspot.com',
  appId: '1:779939245876:ios:bc28af214bf8625be9ff61',
  messagingSenderId: '779939245876',
}

const credentials = Platform.select({
  android: androidCredentials,
  ios: iosCredentials,
})

const config = {
  name: 'SECONDARY_APP',
}

const firebaseApp = await firebase.initializeApp(credentials as FirebaseAppOptions, config)

export { firebaseApp }
