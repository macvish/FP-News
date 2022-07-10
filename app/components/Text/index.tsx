import React from 'react'
import { Text as RNText, TextProps } from 'react-native'

const Text: React.FC<TextProps> = ({ children, style, ...props }) => {
  return <RNText
    {...props}
    style={[{ 
      fontSize: 14,
     }, style]}
  >
    {children}
  </RNText>
}

export default Text
