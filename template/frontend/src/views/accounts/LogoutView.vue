<template>
  <v-container>
    <v-row align="start" no-gutters style="height: 150px">
      <v-col cols="12">
        <v-card class="text-center">
          <v-card-title class="headline"> Bye Bye </v-card-title>
          <v-card-text>
            <h2>Finalizar sessão?</h2>
            <p class="ma-4">
              <v-btn :loading="loading" color="primary" class="mr-4" x-large block @click="logout">
                SIM
              </v-btn>
              <v-btn
                class="my-2"
                block
                color="primary"
                variant="outlined"
                :to="{ name: 'base-home' }">
                Início
              </v-btn>
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AccountsApi from "@/api/accounts.api.js"
import { useAppStore } from "@/stores/appStore"
import { useAccountsStore } from "@/stores/accountsStore"

export default {
  setup() {
    const appStore = useAppStore()
    const accountsStore = useAccountsStore()
    return { appStore, accountsStore }
  },
  data: () => {
    return {
      loading: false,
    }
  },
  methods: {
    logout() {
      this.loading = true
      AccountsApi.logout()
        .then(() => {
          this.accountsStore.clearLoggedUser()
          this.appStore.showSnackbar("Sessão encerrada!", "warning")
          this.$router.push({ name: "base-home" })
        })
        .finally(() => {
          this.loading = false
        })
    },
  },
}
</script>
