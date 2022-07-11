import { StyleSheet } from 'react-native'

import { colors } from '../../../lib/helper'
import metrics from '../../../lib/metrics'

const styles = StyleSheet.create({
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 25,
  },
  newsSubText: {
    color: colors.textSecondary,
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: 25,
  },
  newsImageWrapper: {
    alignItems: 'center'
  },
  newsImage: {
    width: metrics.screenWidth / 1.3,
    height: metrics.screenWidth / 1.3,
    borderRadius: 5
  }
})

export default styles
