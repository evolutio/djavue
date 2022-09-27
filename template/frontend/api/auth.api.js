import api from './config.js'
import apiHelpers from './helpers.js'

export default {
  login: (username, password) => {
    return new Promise((resolve, reject) => {
      api
        .post('/api/login', apiHelpers.dataToForm({ username, password }))
        .then((response) => {
          return resolve(response.data)
        })
        .catch((error) => {
          return reject(error)
        })
    })
  },
  logout: () => {
    return new Promise((resolve, reject) => {
      api
        .post('/api/logout')
        .then((response) => {
          return resolve(response.data)
        })
        .catch((error) => {
          return reject(error)
        })
    })
  }
}
