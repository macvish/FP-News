import { StyleSheet } from 'react-native'
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
  }
})

export default styles
