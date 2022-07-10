import { ActionTypes, AuthState } from '../model.d'
import { AuthActionType } from '../action/authActionType'
import { createReducer } from '@reduxjs/toolkit'

const initialAuthState: AuthState = {
  message: ''
}

export const authReducer = createReducer(initialAuthState, (builder) => {
  builder
    .addCase(ActionTypes.LOGIN, (state, action: AuthActionType) => {
      state.message = action.payload.message
    })
})
