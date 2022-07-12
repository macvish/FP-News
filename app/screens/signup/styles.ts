import { StyleSheet } from 'react-native'
import { colors } from '../../lib/helper'
import metrics from '../../lib/metrics'

const styles = StyleSheet.create({
  headerWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: metrics.screenWidth / 3.5,
    paddingVertical: 20
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '500'
  },
  orWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10
  },
  halfDivider: {
    minWidth: metrics.screenWidth / 6,
    borderWidth: 1,
    borderColor: colors.border,
    marginHorizontal: 10
  },
  orText: {
    color: colors.textSecondary
  }
})

export default styles
