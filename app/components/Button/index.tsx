import React from 'react'
import {
  ActivityIndicator,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps
} from 'react-native'

import Text from '../Text'
import styles from './styles'
import { colors } from '../../lib/helper'

interface ButtonProps extends TouchableOpacityProps {
  title?: string
  titleStyle?: StyleProp<TextStyle>
  loading?: boolean
}

const Button: React.FC<ButtonProps> = ({ children, style, title, titleStyle, loading, ...props }) => {
  const renderContent = () => {
    if (loading) {
      return <ActivityIndicator color={colors.white} />
    }
    if (title) {
      return <Text style={[styles.title, titleStyle]}>
        {title}
      </Text>
    }

    return children
  }
  return <TouchableOpacity style={[styles.container, style]} {...props}>
    {renderContent()}
  </TouchableOpacity>
}

export default Button
