import { StyleSheet } from 'react-native'
import { colors } from '../../../lib/helper'
import metrics from '../../../lib/metrics'

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: colors.primary,
    justifyContent: 'center',
    minHeight: metrics.screenWidth / 2,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  title: {
    fontSize: 30,
    color: colors.white,
    fontWeight: '600',
    textAlign: 'center'
  },
  searchContainer: {
    flexDirection: 'row',
    paddingVertical: 10
  },
  searchInput: {
    minWidth: metrics.screenWidth/1.5,
    marginRight: 5
  },
  loaderWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  newsItemWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#EDEEEE',
  },
  newsItemImage: {
    width: metrics.screenWidth/6,
    height: metrics.screenWidth / 6,
    borderRadius: 5
  },
  newsItemTitleWrapper: {
  },
  newsItemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 30
  },
  newItemTopic: {
    color: colors.textSecondary,
    lineHeight: 25
  },
  newsItemDate: {
    color: colors.textSecondary,
    textAlign: 'right'
  },
  emptyPlaceholder: {
    color: colors.textSecondary,
    fontSize: 12,
    textAlign: 'center'
  }
})

export default styles
