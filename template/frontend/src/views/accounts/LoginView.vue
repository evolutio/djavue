<template>
  <v-container>
    <v-row align="center" class="mt-10" no-gutters>
      <v-col cols="12" sm="6" offset-sm="3">
        <v-sheet class="pa-2"> <h1>Login</h1> </v-sheet>
        <v-form>
          <v-text-field
            v-model="username"
            label="E-Mail"
            prepend-inner-icon="mdi-email-fast-outline"
            variant="outlined"
            required
            @keyup.enter="login"></v-text-field>

          <v-text-field
            v-model="password"
            type="password"
            label="Password"
            prepend-inner-icon="mdi-key-outline"
            variant="outlined"
            required
            @keyup.enter="login"></v-text-field>

          <v-btn
            block
            size="large"
            rounded="pill"
            color="primary"
            append-icon="mdi-chevron-right"
            @click="login">
            Login
          </v-btn>
          <v-btn
            class="my-2"
            block
            size="large"
            rounded="pill"
            color="primary"
            variant="outlined"
            :to="{ name: 'base-home' }">
            Início
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "pinia"
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
      valid: false,
      username: "",
      password: "",
      error: false,
      visible: false,
    }
  },
  computed: {
    ...mapState(useAccountsStore, ["loggedUser"]),
  },
  mounted() {
    console.log(this.loggedUser)
    AccountsApi.whoami().then((response) => {
      if (response.authenticated) {
        this.saveLoggedUser(response.user)
        this.appStore.showSnackbar("Usuário já logado", "warning")
        this.showTasks()
      }
    })
  },
  methods: {
    login() {
      this.loading = true
      AccountsApi.login(this.username, this.password)
        .then((response) => {
          if (!response) {
            this.appStore.showSnackbar("Usuário ou senha invalida", "danger")
            return
          }
          this.saveLoggedUser(response.user)
          this.showTasks()
        })
        .finally(() => {
          this.loading = false
        })
    },
    saveLoggedUser(user) {
      this.error = !user
      if (user) {
        this.accountsStore.setLoggedUser(user)
        this.visible = false
        console.log("logged")
      }
    },
    showTasks() {
      this.$router.push({ name: "tasks-list" })
      console.log("--> tasks")
    },
  },
}
</script>
