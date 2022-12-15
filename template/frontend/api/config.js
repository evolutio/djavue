import axios from "axios"

let $store, $router

export function init (context) {
  $store = context.store
  $router = context.app.router
};

const api = axios.create({
  baseURL: process.env.apiBaseUrl,
  xsrfHeaderName: "X-CSRFToken",
  xsrfCookieName: "csrftoken",
  withCredentials: true,
})

export function responseSuccess (response) {
  return response
}

export function responseError (error) {
  // Redireciona falha na comunicação com o BACKEND para página 500
  if (!error.response && error.message === "Network Error") {
    $store.commit("app/setErrorMessage", error.message)
  }

  // Redireciona erro de autênticação para página de login
  if (error.response && error.response.status === 401) {
    $router.push({ name: "accounts-login", params: { message: "Usuário sem autênticação. Efetue o login!" } })
    return
  }
  return Promise.reject(error)
}

api.interceptors.response.use(responseSuccess, responseError)

export default api
