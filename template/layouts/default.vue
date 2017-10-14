<template>
  <v-app class="app">
    <v-toolbar>
      <v-toolbar-title ><router-link class="toolbar-title" to="/">{{name}}</router-link></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>

        <v-btn flat dark ripple v-if="!logged_user" @click="open_login_dialog($event)">Login</v-btn>
        <v-menu v-if="logged_user" bottom left offset-y origin="top right" transition="v-slide-y-transition">
          <v-btn flat dark ripple slot="activator">
            \{{logged_user.first_name}}
          </v-btn>
          <v-list>
            <v-list-tile :router="true" :to="{name: 'perfil'}">
              <v-list-tile-title v-text="'Perfil'"></v-list-tile-title>
            </v-list-tile>
            <v-list-tile @click="logoff()">
              <v-list-tile-title v-text="'Log off'"></v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-toolbar>
    <LoginDialogSocial ref="login_dialog_social"></LoginDialogSocial>
    <LoginDialog ref="login_dialog"></LoginDialog>
    <v-snackbar bottom right v-model="toasts_model.visible" :timeout="toasts_model.timeout">\{{toasts_model.text}}</v-snackbar>
    <nuxt></nuxt>
  </v-app>
</template>

<script>

import Vuex from 'vuex'
import AppApi from '~apijs'
import LoginDialogSocial from '~/components/LoginDialogSocial.vue'
import LoginDialog from '~/components/LoginDialog.vue'
import Events from '~/components/Events.js'

export default {
  computed: Object.assign(
    {},
    Vuex.mapGetters([
      'logged_user'
    ])
  ),
  components: {LoginDialogSocial, LoginDialog},
  data(){
    return {
      toasts_model: {
        visible: false,
        text: '',
        timeout: 1000,
      }
    }
  },
  mounted(){
    Events.subscribe('toast', (data)=>{
      this.show_toast(data);
    })
  },
  methods: {
    go_home(){
      this.$router.go('/');
      console.log('yo')
    },
    open_login_dialog(evt){
      if(process.env.API_MOCK == '1'){  // nao adianta inspecionar process.env no debug. so dando print
        this.$refs.login_dialog.open();
      } else {
        this.$refs.login_dialog_social.open();
      }
      evt.stopPropagation();
    },
    logoff(){
      AppApi.logout().then(()=>{
        this.$store.commit('SET_LOGGED_USER', null);
      });
    },
    show_toast(data){
      this.toasts_model.text = data.text;
      this.toasts_model.timeout = data.timeout;
      this.toasts_model.visible = true;
      console.log('show toast event');
    }
  }
}
</script>

<style scoped lanc="scss">
  .toolbar-title {
    font-family: arial;
    font-size: 28px;
    font-weight: bold;
    color: #006fcf;
    text-decoration: initial;
  }
  .app {
    /*max-width: 900px;*/
  }
</style>