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
      <v-snackbar
        v-model="snackbar.show"
        color="red accent-2"
      >
        {{ snackbar.message }}
      </v-snackbar>

      <v-card class="logo py-4 d-flex justify-center">
        <NuxtLogo />
      </v-card>
      <v-card>
        <v-card-title class="headline">
          Login
        </v-card-title>
        <v-card-text>
          <v-form v-model="valid">
            <v-text-field
              v-model="username"
              label="Usuário"
              required
              outlined
              append-icon="fa-user"
              @keyup.enter="login"
            />

            <v-text-field
              v-model="password"
              label="Senha"
              type="password"
              required
              outlined
              append-icon="fa-key"
              @keyup.enter="login"
            />
            <v-btn
              :loading="loading"
              :disabled="!valid"
              color="primary"
              class="mr-4"
              x-large
              block
              @click="login"
            >
              Continuar <v-icon class="pl-3">
                fa-arrow-right
              </v-icon>
            </v-btn>
          </v-form>
          <p class="ma-4">
            <span class="subtitle-1">Não tenho conta! Fazer <a href="">Cadastro</a></span>
          </p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import AuthApi from '@/api/auth.api.js'

export default {
  name: 'LoginPage',
  data: () => {
    return {
      loading: false,
      valid: false,
      username: '',
      password: '',
      snackbar: {
        show: false,
        message: ''
      },
      error: false,
      visible: false
    }
  },
  methods: {
    login () {
      this.loading = true
      AuthApi.login(this.username, this.password)
        .then((user) => {
          if (!user) {
            this.snackbar.message = 'Usuário ou senha invalida'
            this.snackbar.show = true
            return
          }
          this.saveLoggedUser(user)
          this.$router.push('/tasks/list')
        })
        .finally(() => {
          this.loading = false
        })
    },
    saveLoggedUser (user) {
      this.error = !user
      if (user) {
        this.$store.commit('SET_LOGGED_USER', user)
        this.visible = false
        console.log('logged')
      }
    }
  }
}
</script>
