import { Action, ThunkAction } from "@reduxjs/toolkit"

import store, { rootReducer } from "./store"

export type RootState = ReturnType<typeof rootReducer>

export type AppDispatch = typeof store.dispatch

export interface AuthState {
  user: User
  message?: string
}
export interface User {
  fullName?: string
  phoneNumber?: string
  email?: string
  ussername?: string
}

export interface NewsState {
  news: News
  isLoading?: boolean
  errorMessage?: string
}

export interface News {
  articles?: Article[]
  page?: number
  pageSize?: number
  status?: string
  totalHits?: number
  totalPages?: number
  userInput?: {
    from?: string
    lang?: string
    page?: number
    q?: string
    size?: number
    sortBy?: string
  }
}

export interface Article {
  _id?: string
_score?: number
author?: string
authors?: string[]
cleanUrl?: string
country?: string
isOpinion?:false
language?: string
link?: string
media?: string
publishedDate?: string
publishedDatePrecision?: string
rank?: number
rights?: string
summary?: string
title?: string
topic?: string
}

export enum ActionTypes {
  LOGIN = '[AUTH] LOGIN',
  SIGNUP = '[AUTH] SIGNUP',
  SET_USER = '[AUTH] SET_USER',
  SET_AUTH_MESSAGE = '[AUTH] SET_AUTH_MESSAGE',
  FETCH_NEWS = '[NEWS] FETCH_NEWS',
  GET_NEWS = '[NEWS] GET_NEWS',
  IS_LOADING = '[NEWS] IS_LOADING'
}

export interface LoginData {
  email: string
  password: string
}

export interface SignUpData {
  fullName: string
  phoneNumber: string
  email: string
  username: string
  password: string
}
