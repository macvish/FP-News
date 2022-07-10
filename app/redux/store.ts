import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { authReducer } from './reducer/authReducer'

export const rootReducer = combineReducers({
  auth: authReducer
})

const store = configureStore({
  reducer: rootReducer
})

export default store
