export default {
  setShowErrorMessage (state, payload) {
    state.showErrorMessage = payload
  },
  setErrorMessage (state, payload) {
    state.errorMessage = payload
    state.showErrorMessage = !!payload
  },
}
