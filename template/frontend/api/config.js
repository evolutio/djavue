import axios from "axios"

const api = axios.create({
  baseURL: process.env.apiBaseUrl,
  xsrfHeaderName: "X-CSRFToken",
  xsrfCookieName: "csrftoken",
  withCredentials: true,
})

export default api
