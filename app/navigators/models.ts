import { StackNavigationOptions, StackNavigationProp } from "@react-navigation/stack"

export interface RenderScreenProps {
  name: ScreenNames
  component: React.ComponentType<any>
  options?: StackNavigationOptions
}

export type RootStackParamList = {
  Signup: undefined
  Login: undefined
  NewsListing: undefined
  NewsDetails: undefined
}

export type ScreenNames =
  | 'Signup'
  | 'Login'
  | 'NewsListing'
  | 'NewsDetails'

export type SignupScreenNavigationProps = StackNavigationProp<RootStackParamList, 'Signup'>

export type LoginScreenNavigationProps = StackNavigationProp<RootStackParamList, 'Login'>

export type NewsListingScreenNavigationProps = StackNavigationProp<RootStackParamList, 'NewsListing'>

export type NewsDetailsScreenNavigationProps = StackNavigationProp<RootStackParamList, 'NewsDetails'>
