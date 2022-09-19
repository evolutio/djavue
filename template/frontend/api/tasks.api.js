import api from './config.js'

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
  addTask: (task) => {
    return new Promise((resolve, reject) => {
      api
        .post('/api/tasks/', task)
        .then((response) => {
          return resolve(response.data)
        })
        .catch((error) => {
          return reject(error)
        })
    })
  }
}
