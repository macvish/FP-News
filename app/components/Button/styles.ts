import { StyleSheet } from 'react-native'

import { colors } from '../../lib/helper'
import metrics from '../../lib/metrics'

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: metrics.screenWidth / 4.5,
    padding: 15,
    marginVertical: 10,
    borderRadius: 5
  },
  title: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold'
  }
})

export default styles
