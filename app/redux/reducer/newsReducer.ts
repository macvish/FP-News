import { createReducer, PayloadAction } from '@reduxjs/toolkit'

import { ActionTypes, NewsState, RootState } from '../model.d'
import { NewsActionPayload } from '../action/newsActionType'

const initialNewsState: NewsState = {
  news: {},
  isLoading: false,
  errorMessage: ''
}

export const newsReducer = createReducer(initialNewsState, {
  [ActionTypes.GET_NEWS]: (state, { payload }: PayloadAction<NewsActionPayload>) => {
    state.news = payload.news
    state.errorMessage = payload.errorMessage
    state.isLoading = false
  },
  [ActionTypes.IS_LOADING]: (state, { payload }: PayloadAction<boolean>) => {
    state.isLoading = payload
  },
})

export const newsSelector = (state: RootState) => state.news 

export default newsReducer
