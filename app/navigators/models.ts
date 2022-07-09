import { StackNavigationOptions } from "@react-navigation/stack"

export interface RenderScreenProps {
  name: string
  component: React.ComponentType<any>
  options?: StackNavigationOptions
}
