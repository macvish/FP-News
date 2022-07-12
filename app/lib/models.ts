export interface GenericObject {
  [x: string]: any
}

export interface FirebaseAppOptions {
  appId: string
  apiKey?: string
  databaseURL?: string
  projectId: string
  gaTrackingId?: string
  storageBucket?: string
  messagingSenderId?: string
  clientId?: string
  androidClientId?: string
  deepLinkURLScheme?: string
  [name: string]: any
}
