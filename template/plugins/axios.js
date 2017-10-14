import axios from 'axios'

export default axios.create({
  baseURL: process.env.BASE_URL,
  withCredentials: true,
})