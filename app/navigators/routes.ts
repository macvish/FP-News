import Signup from '../screens/signup'
import { RenderScreenProps } from './models'

import NewsListing from '../screens/news/newsListing'

export const root: RenderScreenProps[] = [
  { name: 'Signup', component: Signup, options: { headerShown: false } },
  { name: 'NewsListing', component: NewsListing, options: {  } }
]
