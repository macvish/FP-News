import { ActionTypes, AuthState } from '../model.d'
import { AuthActionType } from '../action/authActionType'

const initialAuthState: AuthState = {
  message: ''
}

export const authReducer = (
  state = initialAuthState,
  action: AuthActionType
): AuthState => {
  switch (action.type) {
    case ActionTypes.LOGIN: {
      const { message } = action.payload

      return { ...state, message }
    }
    default: {
      return state
    }
  }
}
