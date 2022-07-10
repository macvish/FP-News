import React from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

interface ButtonProps extends TouchableOpacityProps {}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <TouchableOpacity {...props}>
    {children}
  </TouchableOpacity>
}

export default Button
