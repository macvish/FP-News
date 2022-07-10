import React from 'react'
import { View } from 'react-native'

import Input from '../../../components/Input'
import Text from '../../../components/Text'
import styles from './styles'

const NewsListing: React.FC = () => {
  return <View style={styles.container}>
    <Text style={styles.title}>FP News</Text>
    <Input placeholder='Search for news'/>
    <Text>News Listing</Text>
  </View>
}

export default NewsListing
