import React, { useEffect, useState } from 'react'
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Image,
  TouchableOpacity,
  View
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import { isEmpty } from 'lodash'

import Button from '../../../components/Button'
import Input from '../../../components/Input'
import Root from '../../../components/Root'
import Text from '../../../components/Text'
import { NewsListingScreenNavigationProps } from '../../../navigators/models'
import { fetchNews, getNews, toggleIsLoading } from '../../../redux/action/actions'
import { AppDispatch, Article, NewsState } from '../../../redux/model'
import { newsSelector } from '../../../redux/reducer/newsReducer'
import styles from './styles'
import { trimText, colors } from '../../../lib/helper'
import metrics from '../../../lib/metrics'

interface RenderItemProps {
  item: Article
  index: number
}

const NewsListing: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('Nigeria')
  const dispatch = useDispatch<AppDispatch>()
  const { news, isLoading, errorMessage } = useSelector(newsSelector)
  const navigation = useNavigation<NewsListingScreenNavigationProps>()

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
    return <TouchableOpacity
      key={index}
      style={styles.newsItemWrapper}
      activeOpacity={0.5}
      onPress={() => navigation.navigate('NewsDetails', { newsDetails: item })}
    >
      <Image source={{ uri: item.media ?? '' }} style={styles.newsItemImage} />
      <View style={styles.newsItemTitleWrapper}>
        <Text style={styles.newsItemTitle}>{trimText(item.title, 15)}</Text>
        <Text style={styles.newItemTopic}>{item.topic?.toUpperCase()}</Text>
      </View>
      <Text style={styles.newsItemDate}>{`${moment(item.publishedDate).format('YYYY-MM-DD')}`}</Text>
    </TouchableOpacity>
  }

  const renderContent = () => {
    if (isLoading) {
      return <View style={styles.loaderWrapper}>
        <ActivityIndicator color={colors.primary} />
      </View>
    }

    if (isEmpty(news.articles)) {
      return (
        <View style={styles.loaderWrapper}>
          <Text style={styles.emptyPlaceholder}>
            There's currently no news, please search for a topic
          </Text>
        </View>
      )
    }

    return <FlatList
      data={news.articles}
      renderItem={renderItem}
    />
  }

  useEffect(() => {
    const makeApiCall  = async () => {
      const result = await dispatch(fetchNews(searchValue))
      if (result.payload) {
        dispatch(getNews(result.payload as NewsState))
      }
    }

    return () => {
      makeApiCall()
    }
  }, [])

  useEffect(() => {
    if (news.status !== "ok" && news.status !== undefined) {
      Alert.alert('', news.status)
    }
  }, [news.status])
  
  return (
    <Root noPadding>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>FP News</Text>
        <View style={{ alignItems: 'center' }}>
          <Button
            title='Throw Error'
            style={{
              backgroundColor: '#000',
              width: metrics.screenWidth / 3
            }}
            onPress={() => {
              throw 'An error occurred'
            }}
          />
        </View>
      </View>
      <View style={{ flex: 1, padding: 20 }}>
        <View style={styles.searchContainer}>
          <Input
            placeholder='Search for news'
            value={searchValue}
            onChangeText={setSearchValue}
            style={styles.searchInput}
          />
          <Button
            title='Search'
            onPress={handleSearch}
            disabled={isLoading}
            loading={isLoading}
          />
        </View>
        {renderContent()}
      </View>
    </Root>
  )
}

export default NewsListing
