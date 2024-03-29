import { createReducer, PayloadAction } from '@reduxjs/toolkit'

import { ActionTypes, AuthState, RootState, User } from '../model.d'

const initialAuthState: AuthState = {
  user: {},
  isLoggedIn: false,
  message: ''
}

const authReducer = createReducer(initialAuthState, {
  [ActionTypes.SET_AUTH_MESSAGE]: (state, action: PayloadAction<string>) => {
    state.message = action.payload
  },
  [ActionTypes.SET_USER]: (state, action: PayloadAction<User>) => {
    state.user = action.payload
  },
  [ActionTypes.LOGIN]: (state, action: PayloadAction<boolean>) => {
    state.isLoggedIn = action.payload
  }
})

export const authSelector = (state: RootState) => state.auth 

export default authReducer
