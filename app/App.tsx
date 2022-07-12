import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import codePush from 'react-native-code-push'
import { Provider } from 'react-redux'
import crashlytics from '@react-native-firebase/crashlytics'

import AppNavigation from './navigators/app'
import store from './redux/store'

const App: React.FC = () => {
  useEffect(() => {
    crashlytics().log('App Mounted')
  }, [])
  
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  )
}

export default codePush(App)
