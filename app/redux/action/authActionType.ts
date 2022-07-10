import { ActionTypes } from '../model'

interface LoginAction {
  type: ActionTypes.LOGIN
  payload: {
    message: string
  }
}

export type AuthActionType = | LoginAction
