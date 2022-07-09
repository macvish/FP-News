import React from 'react'

import GenerateStack from './generateStack'
import { root } from './routes'

const AppNavigation: React.FC = () => {
  return <GenerateStack paths={root} />
}

export default AppNavigation
