import React from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { SignupScreenNavigationProps } from '../../navigators/models'
import Button from '../../components/Button'
import Text from '../../components/Text'

const Signup = () => {
  const navigation = useNavigation<SignupScreenNavigationProps>()
  return <View style={{ padding: 20 }}>
    <Text>Signup</Text>
    <Button onPress={() => navigation.push('NewsListing')}>
      <Text>Click here</Text>
    </Button>
  </View>
}

export default Signup
