export default {
    show (store, options) {
        store.commit('SET_SNACK_STATE', {
            visible: true,
            text: options.text,
            color: options.color || 'success',
            timeout: options.timeout || 6000
        })
    }
}