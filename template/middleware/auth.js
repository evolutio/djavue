import AppApi from '~apijs'

export default function (ctx) {
    return AppApi.whoami().then((response) => {
        if(response.data.authenticated){
            ctx.store.commit('SET_LOGGED_USER', response.data.user);
        } else {
            ctx.store.commit('SET_LOGGED_USER', null);
        }
    });
}