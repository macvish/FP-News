import { createAction, createAsyncThunk } from '@reduxjs/toolkit'

import { API } from '../../lib/api'
import { toCamelCase } from '../../lib/object'
import { ActionTypes, News, NewsState, User } from '../model.d'

interface Params {
  searchValue: string
  pageSize?: number
}

export const login = createAction<boolean>(ActionTypes.LOGIN)

export const setAuthMessage = createAction<string>(ActionTypes.SET_AUTH_MESSAGE)

export const setUser = createAction<User>(ActionTypes.SET_USER)

export const fetchNews = createAsyncThunk(
  ActionTypes.FETCH_NEWS,
  async ({ searchValue, pageSize }: Params) => {
    try {
      const response = API.get('', {
        params: { q: searchValue, lang: 'en', page_size: pageSize }
      })
      const responseJson = await response.then(res => res)
      
      return {
        news: toCamelCase(responseJson.data) as News,
        errorMessage: ''
      }
    } catch (err) {
      return { news: {}, errorMessage: err}
    }
  }
)

export const getNews = createAction<NewsState>(ActionTypes.GET_NEWS)

export const toggleIsLoading = createAction<boolean>(ActionTypes.IS_LOADING)
