import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import codePush from 'react-native-code-push'
import { Provider } from 'react-redux'

import AppNavigation from './navigators/app'
import store from './redux/store'

const App: React.FC = () => {
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
