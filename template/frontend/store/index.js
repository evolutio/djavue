import { Store } from 'vuex'

const store = () => new Store({

  state: {
    loggedUser: undefined,
    snack: {}
  },
  mutations: {
    SET_LOGGED_USER (state, loggedUser) {
      console.log('set logged user: ' + JSON.stringify(loggedUser))
      state.loggedUser = loggedUser
    },
    SET_SNACK_STATE (state, newstate) {
      state.snack = newstate
    }
  },
  getters: {
    loggedUser (state) {
      return state.loggedUser
    },
    snack (state) {
      return state.snack
    }
  }
})

export default store
