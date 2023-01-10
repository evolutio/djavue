import { defineStore } from "pinia"

export const useAppStore = defineStore("appStore", {
  state: () => ({
    errorMessage: undefined,
    showErrorMessage: false,
    type: "success",
  }),
  actions: {
    setShowErrorMessage(payload) {
      this.showErrorMessage = payload
    },
    showSnackbar(message, type) {
      this.type = type
      this.errorMessage = message
      this.showErrorMessage = !!message
    },
  },
})
