export default {
  setLoggedUser(state, payload) {
    console.log("set logged user: " + JSON.stringify(payload))
    state.loggedUser = payload
  },
}
