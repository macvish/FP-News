import { StyleSheet } from 'react-native'
import { colors } from '../../../lib/helper'
import metrics from '../../../lib/metrics'

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  title: {
    fontSize: 25,
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
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#EDEEEE'
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
  }
})

export default styles
