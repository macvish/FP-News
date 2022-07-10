import React from 'react'
import { StyleProp, TextStyle, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import Text from '../Text'
import styles from './styles'

interface ButtonProps extends TouchableOpacityProps {
  title?: string
  titleStyle?: StyleProp<TextStyle>
}

const Button: React.FC<ButtonProps> = ({ children, style, title, titleStyle, ...props }) => {
  return <TouchableOpacity style={[styles.container, style]} {...props}>
    {title
      ? <Text style={[styles.title, titleStyle]}>
        {title}
      </Text>
      : children
    }
  </TouchableOpacity>
}

export default Button
