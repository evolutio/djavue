<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <NuxtLogo />
        <VuetifyLogo />
      </v-card>
      <v-card>
        <v-card-title class="headline">
          Bem-vindo ao template de App Djàvue
        </v-card-title>
        <v-card-text>
          <p>Djávue tem Vuetify + Nuxt.js no frontend e Django no Backend, tudo já configurado e pronto para uso em Produção.</p>
          <p>
            Links úteis:</p>
          <p>
            <ul>
              <li>
                <a
                  href="https://github.com/huogerac/djavue/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repo deste template
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/evolutio/djavue/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repo oficial djàvue template
                </a>
              </li>
              <li>
                <a
                  href="https://vuetifyjs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vuetify
                </a>
              </li>
              <li>
                <a
                  href="https://nuxtjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Nuxt.js
                </a>
              </li>
            </ul>
          </p>
          <p>
            Achou um problema? Cadastre uma <a
              href="https://github.com/huogerac/djavue/issues"
              target="_blank"
              rel="noopener noreferrer"
              title="contribute"
            >
              Issue aqui
            </a>.
          </p>
          <p>Obrigado por utilizar este template.</p>
          <div class="text-xs-right">
            <em><small>&mdash; Enzo Pascal 🎩</small></em>
          </div>
          <hr class="my-3">
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nuxt GitHub
          </a>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/inicio"
          >
            Continuar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
