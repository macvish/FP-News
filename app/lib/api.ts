import Axios from 'axios'

export const API = Axios.create({
  baseURL: 'https://free-news.p.rapidapi.com/v1/search',
  headers: {
    'conetent-type': 'application/json',
    'X-RapidAPI-Key': '7f3f867530msh5e76ea30f30cbb0p1e4c9ejsn7d47fbacf2b8',
    'X-RapidAPI-Host': 'free-news.p.rapidapi.com'
  },
  timeout: 30000
})
