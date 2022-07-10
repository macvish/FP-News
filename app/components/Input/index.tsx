import React from 'react'
import { TextInput, TextInputProps, View } from 'react-native'
import styles from './styles'

const Input: React.FC<TextInputProps> = ({ style, ...props }) => {
  return (
    <View>
      <TextInput
        {...props}
        style={[styles.container, style]}
      />
    </View>
  )
}

export default Input
