import api from './config.js'

const dataToForm = (params) => {
  params = params || {}
  const formData = new FormData()
  for (const k of Object.keys(params)) {
    formData.append(k, params[k])
  }
  return formData
}

export default {
  login: (username, password) => {
    return new Promise((resolve, reject) => {
      api
        .post('/api/login', dataToForm({ username, password }))
        .then((response) => {
          return resolve(response.data)
        })
        .catch((error) => {
          return reject(error)
        })
    })
  }
}
