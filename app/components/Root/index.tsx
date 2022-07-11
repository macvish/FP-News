import React from 'react'
import { Platform, StyleProp, View, ViewStyle } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

interface RootProps {
  children?: React.ReactNode
  noPadding?: boolean
  style?: StyleProp<ViewStyle>
  containerStyle?: StyleProp<ViewStyle>
  scrollable?: boolean
}

const Root: React.FC<RootProps> = ({
  children,
  containerStyle,
  noPadding,
  scrollable,
  style
}) => {
  return (
    <>
      {scrollable
        ? (<KeyboardAwareScrollView
          style={[{ backgroundColor: '#FFFFFF' }, style]}
          contentContainerStyle={[noPadding ? {} : { padding: 20 }, containerStyle]}
          keyboardShouldPersistTaps='handled'
          showsVerticalScrollIndicator={false}
          extraScrollHeight={Platform.OS === 'ios' ? 50 : 0}
          enableOnAndroid
        >
          {children}
        </KeyboardAwareScrollView>)
        : (
          <View style={[{
            flex: 1,
            backgroundColor: '#FFFFFF',
            padding: noPadding ? 0 : 20
          }, style]}>
            {children}
          </View>
        )
      }
    </>
  )
}

export default Root
