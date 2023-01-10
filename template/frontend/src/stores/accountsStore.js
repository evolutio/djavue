import { defineStore } from "pinia"

export const useAccountsStore = defineStore("accountsStore", {
  state: () => ({
    loggedUser: null,
  }),
  actions: {
    setLoggedUser(user) {
      this.loggedUser = user
    },
    clearLoggedUser() {
      this.loggedUser = null
    },
  },
})
