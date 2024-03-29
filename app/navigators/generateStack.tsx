import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { RenderScreenProps, RootStackParamList } from './models'

interface GenerateStackProps {
  paths: RenderScreenProps[]
}

const Stack = createStackNavigator<RootStackParamList>()

const renderScreen = (
  { name, component, options }: RenderScreenProps,
  index: number | string
) => {
  return (
    <Stack.Screen
      key={index}
      name={name}
      component={component}
      options={options}
    />
  )
}

const GenerateStack: React.FC<GenerateStackProps> = ({ paths }) => {
  if (paths) {
    return (
      <Stack.Navigator>
        {paths.map((item, index) => {
          return renderScreen(item, index)
        })}
      </Stack.Navigator>
    )
  }
  
  return <></>
}

export default GenerateStack
