import React from 'react'
import { Image, View } from 'react-native'
import { useRoute } from '@react-navigation/native'

import Root from '../../../components/Root'
import Text from '../../../components/Text'
import { NewsDetailsScreenRouteProps } from '../../../navigators/models'
import styles from './styles'
import moment from 'moment'

const NewsDetails: React.FC = () => {
  const { params: { newsDetails } } = useRoute<NewsDetailsScreenRouteProps>()
  return <Root scrollable>
    <View style={{ marginBottom: 20 }}>
      <Text>
        <Text style={styles.newsSubText}>{newsDetails.topic?.toUpperCase()}: </Text>
        <Text style={styles.newsTitle}>{newsDetails.title}</Text>
      </Text>
      <Text style={styles.newsSubText}>By {newsDetails.author}</Text>
      <Text style={[styles.newsSubText]}>
        {`${moment(newsDetails.publishedDate).format('MMM D YYYY')}`}
      </Text>
    </View>
    <View style={styles.newsImageWrapper}>
      <Image source={{ uri: newsDetails.media }} style={styles.newsImage} />
      <Text style={styles.newsSubText}>{newsDetails.rights}</Text>
    </View>
    <View style={{ marginTop: 20 }}>
      <Text>{newsDetails.summary}</Text>
    </View>
  </Root>
}

export default NewsDetails
