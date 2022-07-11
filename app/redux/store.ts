import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { authReducer } from './reducer/authReducer'
import newsReducer from './reducer/newsReducer'

export const rootReducer = combineReducers({
  auth: authReducer,
  news: newsReducer
})

const store = configureStore({
  reducer: rootReducer
})

export default store
