import { RouteProp } from '@react-navigation/native'
import { StackNavigationOptions, StackNavigationProp } from '@react-navigation/stack'

import { Article } from '../redux/model'

export interface RenderScreenProps {
  name: ScreenNames
  component: React.ComponentType<any>
  options?: StackNavigationOptions
}

export type RootStackParamList = {
  Signup: undefined
  Login: undefined
  NewsListing: undefined
  NewsDetails: { newsDetails: Article }
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
export type NewsDetailsScreenRouteProps = RouteProp<RootStackParamList, 'NewsDetails'>
