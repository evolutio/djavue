import axios from 'axios'
import settings from '@/settings'

const api = axios.create({
  baseURL: settings.apiBaseUrl,
  xsrfHeaderName: 'X-CSRFToken',
  xsrfCookieName: 'csrftoken',
  withCredentials: true
})

export default api
