<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
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
              @click="logout">
              Yes
            </v-btn>
          </p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import AccountsApi from "@/api/accounts.api.js"

export default {
  name: "LogoutPage",
  data: () => {
    return {
      loading: false,
    }
  },
  methods: {
    logout () {
      this.loading = true
      AccountsApi.logout()
        .then(() => {
          this.$store.commit("accounts/setLoggedUser", null)
          this.$nuxt.$emit("show-snackbar", "Sessão encerrada!")
          this.$router.push("/")
        })
        .finally(() => {
          this.loading = false
        })
    },
  },
}
</script>
