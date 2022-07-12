import React from 'react'
import { TextInput, TextInputProps, View } from 'react-native'
import Text from '../Text'
import styles from './styles'

interface InputProps extends TextInputProps {
  label?: string
}

const Input: React.FC<InputProps> = ({ label, style, ...props }) => {
  return (
    <View style={{ marginBottom: 10 }}>
      {label ? <Text style={styles.inputLabel}>{label}</Text> : null}
      <TextInput
        {...props}
        style={[styles.container, style]}
      />
    </View>
  )
}

export default Input
