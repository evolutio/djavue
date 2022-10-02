import api from './config.js'
import apiHelpers from './helpers.js'

export default {
  getTasks: () => {
    return new Promise((resolve, reject) => {
      api
        .get('/api/list_todos')
        .then((response) => {
          return resolve(response.data)
        })
        .catch((error) => {
          return reject(error)
        })
    })
  },
  addNewTask: (description) => {
    return new Promise((resolve, reject) => {
      api
        .post('/api/add_todo', apiHelpers.dataToForm({ description }))
        .then((response) => {
          return resolve(response.data)
        })
        .catch((error) => {
          return reject(error)
        })
    })
  }
}
