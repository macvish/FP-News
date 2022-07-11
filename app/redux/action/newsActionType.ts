import { ActionTypes, News } from '../model.d'

export interface NewsActionPayload {
  news: News
  errorMessage?: string
}
