import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import codePush from 'react-native-code-push'
import { Provider } from 'react-redux'
import crashlytics from '@react-native-firebase/crashlytics'

import AppNavigation from './navigators/app'
import store from './redux/store'
import AsyncStorage from '@react-native-community/async-storage'
import { IS_LOGGED_IN } from './lib/constants'
import { requestUserPermission } from './lib/permissions'

const App: React.FC = () => {
  const [navInitialState, setNavInitialState] = React.useState<{
    routes: { name: string }[]
  }>({ routes: [] })
  
  const checkAuthStatus = async () => {
    const isLoggedIn = await AsyncStorage.getItem(IS_LOGGED_IN)
    
    if (isLoggedIn === 'true') {
      setNavInitialState({ routes: [{ name: 'NewsListing' }]})
    } else {
      setNavInitialState({ routes: [{ name: 'Login' }]})
    }
  }
  useEffect(() => {
    
    return () => {
      crashlytics().log('App Mounted')
      checkAuthStatus()
      requestUserPermission()
    }
  }, [])
  
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer initialState={navInitialState}>
          <AppNavigation />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  )
}

export default codePush(App)
