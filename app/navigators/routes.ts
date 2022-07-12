import { RenderScreenProps } from './models'
import Signup from '../screens/signup'
import NewsListing from '../screens/news/newsListing'
import NewsDetails from '../screens/news/newsDetails'
import Login from '../screens/login'

export const root: RenderScreenProps[] = [
  { name: 'Login', component: Login, options: { headerShown: false } },
  { name: 'Signup', component: Signup, options: { headerShown: false } },
  { name: 'NewsListing', component: NewsListing, options: { headerShown: false } },
  { name: 'NewsDetails', component: NewsDetails, options: { headerBackTitle: ' ', headerTitle: '' } }
]
