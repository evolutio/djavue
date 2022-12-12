export default {
  SET_LOGGED_USER (state, payload) {
    console.log("set logged user: " + JSON.stringify(payload))
    state.loggedUser = payload
  },
}
