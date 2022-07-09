import { rootReducer } from "./store"

export type RootState = ReturnType<typeof rootReducer>

export interface AuthState {
  message?: string
}

export enum ActionTypes {
  LOGIN = '[AUTH] LOGIN'
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
