<template>
  <v-row
    justify="center"
    align="center"
  >
    <v-col
      cols="12"
      sm="8"
      md="6"
    >
      <v-card>
        <v-card-title class="headline">
          Bye Bye
        </v-card-title>
        <v-card-text>
          <h2>Confirm?</h2>
          <p class="ma-4">
            <v-btn
              :loading="loading"
              color="primary"
              class="mr-4"
              x-large
              block
              @click="logout"
            >
              Yes
            </v-btn>
          </p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import AuthApi from '@/api/auth.api.js'

export default {
  name: 'LogoutPage',
  data: () => {
    return {
      loading: false
    }
  },
  methods: {
    logout () {
      this.loading = true
      AuthApi.logout()
        .then((user) => {
          this.$store.commit('SET_LOGGED_USER', null)
          this.$router.push('/')
        })
        .finally(() => {
          this.loading = false
        })
    }
  }
}
</script>
