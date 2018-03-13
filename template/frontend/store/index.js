import Vuex from 'vuex'

const store = () => new Vuex.Store({

  state: {
    logged_user: undefined,
  },
  mutations: {
    SET_LOGGED_USER(state, logged_user) {
      console.log('set logged user: '+JSON.stringify(logged_user))
      state.logged_user = logged_user
    }
  },
  getters: {
    logged_user(state) {
      return state.logged_user
    }
  }
})

export default store