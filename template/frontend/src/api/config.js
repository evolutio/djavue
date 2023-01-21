import axios from "axios"

import { useAppStore } from "@/stores/appStore"
import router from "../router"

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  xsrfHeaderName: "X-CSRFToken",
  xsrfCookieName: "csrftoken",
  withCredentials: true,
})

export function responseSuccess(response) {
  return response
}

export function responseError(error) {
  // Redireciona falha na comunicação com o BACKEND para página 500
  const appStore = useAppStore()
  if (!error.response && error.message === "Network Error") {
    appStore.setShowErrorMessage(error.message)
  }

  // Redireciona erro de autênticação para página de login
  if (error.response && error.response.status === 401) {
    appStore.showSnackbar("Usuário sem autênticação. Efetue o login!", "warning")
    router.push({
      name: "accounts-login",
    })
    return
  }
  return Promise.reject(error)
}

api.interceptors.response.use(responseSuccess, responseError)

export default api
