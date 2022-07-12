import Axios from 'axios'
import perf from '@react-native-firebase/perf'

export const API = Axios.create({
  baseURL: 'https://free-news.p.rapidapi.com/v1/search',
  headers: {
    'conetent-type': 'application/json',
    'X-RapidAPI-Key': '7f3f867530msh5e76ea30f30cbb0p1e4c9ejsn7d47fbacf2b8',
    'X-RapidAPI-Host': 'free-news.p.rapidapi.com'
  },
  timeout: 30000
})

API.interceptors.request.use(async function (config) {
  try {
    const httpMetric = perf().newHttpMetric(String(config.url), config.method)
    config.metadata = { httpMetric }

    await httpMetric.start()
  } finally {
    return config
  }
})

API.interceptors.response.use(
  async function (response) {
    try {
      // Request was successful, e.g. HTTP code 200

      const { httpMetric } = response.config.metadata

      // add any extra metric attributes if needed
      // httpMetric.putAttribute('userId', '12345678')

      httpMetric.setHttpResponseCode(response.status)
      httpMetric.setResponseContentType(response.headers['content-type'])
      await httpMetric.stop()
    } finally {
      return response
    }
  },
  async function (error) {
    try {
      // Request failed, e.g. HTTP code 500

      const { httpMetric } = error.config.metadata

      // add any extra metric attributes if needed
      // httpMetric.putAttribute('userId', '12345678')

      httpMetric.setHttpResponseCode(error.response.status)
      httpMetric.setResponseContentType(error.response.headers['content-type'])
      await httpMetric.stop()
    } finally {
      // Ensure failed requests throw after interception
      return Promise.reject(error)
    }
  },
)
