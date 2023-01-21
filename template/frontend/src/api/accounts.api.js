import api from "./config.js"
import apiHelpers from "./helpers.js"

export default {
  whoami: () => {
    return new Promise((resolve, reject) => {
      api
        .get("/api/accounts/whoami")
        .then((response) => {
          return resolve(response.data)
        })
        .catch((error) => {
          return reject(error)
        })
    })
  },
  login: (username, password) => {
    return new Promise((resolve, reject) => {
      api
        .post("/api/accounts/login", apiHelpers.dataToForm({ username, password }))
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
        .post("/api/accounts/logout")
        .then((response) => {
          return resolve(response.data)
        })
        .catch((error) => {
          return reject(error)
        })
    })
  },
}
