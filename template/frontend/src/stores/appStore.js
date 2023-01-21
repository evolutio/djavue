import { defineStore } from "pinia"

export const useAppStore = defineStore("appStore", {
  state: () => ({
    errorMessage: undefined,
    showErrorMessage: false,
    snackbarMessage: undefined,
    showSnackbarMessage: false,
    type: "success",
  }),
  actions: {
    setShowErrorMessage(errorMessage) {
      this.errorMessage = errorMessage
      this.showErrorMessage = !!errorMessage
    },
    showSnackbar(message, type) {
      this.type = type
      this.snackbarMessage = message
      this.showSnackbarMessage = !!message
    },
  },
})
