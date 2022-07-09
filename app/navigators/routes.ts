import Signup from "../screens/signup"
import { RenderScreenProps } from "./models"

export const root: RenderScreenProps[] = [
  { name: 'SignUp', component: Signup, options: { headerShown: false } }
]
