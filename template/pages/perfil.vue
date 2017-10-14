<template>
  <main>
    <v-layout row wrap>
      <v-flex xs12 sm8 offset-sm2 class="px-2 pt-5">
        <v-card>
          <v-toolbar class="light-blue">
            <v-toolbar-title>\{{user.username}} - perfil</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-container fluid>
              <v-text-field label="Primeiro nome" required v-model="user.first_name"/>
              <v-text-field label="Último nome" required v-model="user.last_name"/>
              <v-text-field label="Email" type="email" required v-model="user.email"/>
              <v-switch label="Receber novidades sobre o conteúdo" v-model="user.notifications_enabled"/>
            </v-container>
          </v-card-text>
          <v-btn class="blue--text darken-1" flat @click="save()" :loading="saving" :disabled="saving">Salvar</v-btn>
        </v-card>
      </v-flex>
    </v-layout>
  </main>
</template>

<script>

import axios from 'axios';
import Vuex from 'vuex';
import AppApi from '~apijs'
import Toasts from '~/components/Toasts.js'

export default {
  data () {
    return {
      user: {
        username: '',
        name: '',
        email: '',
        notifications_enabled: false,
      },
      saving: false,
    };
  },
  methods: {
    save(){
      var user2save = {
        first_name: this.user.first_name,
        last_name: this.user.last_name,
        email: this.user.email,
        notifications_enabled: this.user.notifications_enabled,
      };
      this.saving = true;
      AppApi.save_perfil(user2save).then((result)=>{
        var user = result.data;
        if(user){
          this.$store.commit('SET_LOGGED_USER', user);
        }
        this.saving = false;
        Toasts.show('Perfil salvo com sucesso', {timeout: 3000});
      });
    }
  },
  mounted(){
    this.user = Object.assign({}, this.$store.getters.logged_user)
  }
}
</script>
