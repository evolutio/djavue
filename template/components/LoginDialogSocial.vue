<template>
  <div>
    <v-dialog v-model="visible">
      <v-card>
        <v-card-title class="headline">Log in</v-card-title>
          <v-card-text>
            <p>Faça login usando um dos serviços abaixo</p>
            <v-layout row wrap>
              <v-flex xs12><v-btn block round error href="/login/google-oauth2">Google</v-btn></v-flex>
              <v-flex xs12><v-btn block round primary href="/login/facebook">Facebook</v-btn></v-flex>
              <v-flex xs12><v-btn block round dark href="/login/github">Github</v-btn></v-flex>
            </v-layout>
          </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>

import AppApi from '~apijs'

export default {
  data () {
    console.log('data');
    return {
      visible: false,
      loading: false,
      username: '',
      password: '',
      error: false,
    };
  },
  methods: {
    open(){
      this.visible = true;
      console.log('Open');
    },
    close(){
      this.visible = false;
      console.log('Close');
    },
  },
}
</script>
