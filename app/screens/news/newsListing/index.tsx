import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Alert, View } from 'react-native'
import Button from '../../../components/Button'

import Input from '../../../components/Input'
import Root from '../../../components/Root'
import Text from '../../../components/Text'
import { API } from '../../../lib/api'
import { NewsListingScreenNavigationProps } from '../../../navigators/models'
import styles from './styles'

const NewsListing: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  const Navigation = useNavigation<NewsListingScreenNavigationProps>()

  const handleSearch = () => {
    if (searchValue) {
      API.get('', { params: { q: searchValue, lang: 'en' } })
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    } else {
      Alert.alert('', 'Search field cannot be empty')
    }
  }
  
  return <Root style={styles.container}>
    <Text style={styles.title}>FP News</Text>
    <View style={styles.searchContainer}>
      <Input
        placeholder='Search for news'
        value={searchValue}
        onChangeText={setSearchValue}
        style={styles.searchInput}
      />
      <Button title='Search' onPress={handleSearch} />
    </View>
  </Root>
}

export default NewsListing
