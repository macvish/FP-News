import { RenderScreenProps } from './models'
import Signup from '../screens/signup'
import NewsListing from '../screens/news/newsListing'
import NewsDetails from '../screens/news/newsDetails'

export const root: RenderScreenProps[] = [
  { name: 'Signup', component: Signup, options: { headerShown: false } },
  { name: 'NewsListing', component: NewsListing, options: { headerShown: false } },
  { name: 'NewsDetails', component: NewsDetails, options: { headerBackTitle: ' ', headerTitle: '' } }
]
