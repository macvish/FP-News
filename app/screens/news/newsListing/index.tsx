import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Alert, FlatList, Image, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'

import Button from '../../../components/Button'
import Input from '../../../components/Input'
import Root from '../../../components/Root'
import Text from '../../../components/Text'
import { NewsListingScreenNavigationProps } from '../../../navigators/models'
import { fetchNews, getNews, toggleIsLoading } from '../../../redux/action/actions'
import { AppDispatch, Article, NewsState } from '../../../redux/model'
import { newsSelector } from '../../../redux/reducer/newsReducer'
import styles from './styles'
import { trimText } from '../../../lib/helper'

interface RenderItemProps {
  item: Article
  index: number
}

const NewsListing: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  const dispatch = useDispatch<AppDispatch>()
  const { news, isLoading, errorMessage } = useSelector(newsSelector)
  const Navigation = useNavigation<NewsListingScreenNavigationProps>()

  const handleSearch = async () => {
    if (searchValue) {
      dispatch(toggleIsLoading(true))
      const result = await dispatch(fetchNews(searchValue))
      if (result.payload) {
        dispatch(getNews(result.payload as NewsState))
      }
    } else {
      Alert.alert('', 'Search field cannot be empty')
    }
  }

  const renderItem = ({ item, index }: RenderItemProps) => {
    return <View key={index} style={styles.newsItemWrapper}>
      <Image source={{ uri: item.media }} style={styles.newsItemImage} />
      <View style={styles.newsItemTitleWrapper}>
        <Text style={styles.newsItemTitle}>{trimText(item.title, 15)}</Text>
        <Text style={styles.newItemTopic}>{item.topic?.toUpperCase()}</Text>
      </View>
      <Text style={styles.newsItemDate}>{`${moment(item.publishedDate).format('YYYY-MM-DD')}`}</Text>
    </View>
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
      <Button title='Search' onPress={handleSearch} disabled={isLoading} />
    </View>
    {isLoading
      ? <View style={styles.loaderWrapper}>
        <ActivityIndicator />
      </View>
      : <FlatList
        data={news.articles}
        renderItem={renderItem}
      />
    }
  </Root>
}

export default NewsListing
