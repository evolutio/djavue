<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-img contain height="240" src="@/assets/logo.svg" />
      <blockquote class="blockquote text-h5">
        &#8220;Primeiro, resolva o problema. Depois, escreva o código.&#8221;
        <footer>
          <small>
            <em>&mdash; John Johnson &mdash;</em>
          </small>
        </footer>
      </blockquote>

      <div class="text-body-1 mb-n1 pt-4">Bem-vindo ao template</div>
      <h1 class="text-h2 font-weight-bold">Djàvue</h1>
      <code>Vue3 + Vuetify + Vite</code>

      <div class="py-12" />

      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <v-btn
            color="primary"
            :to="{ name: 'basic-getstarted' }"
            min-width="228"
            rel="noopener noreferrer"
            size="x-large"
            variant="flat">
            <v-icon icon="mdi-speedometer" size="large" start />
            Get Started
          </v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn
            color="primary"
            min-width="228"
            rel="noopener noreferrer"
            size="x-large"
            variant="flat"
            :to="{ name: 'accounts-login' }">
            <v-icon icon="mdi-account-arrow-right-outline" size="large" start />
            Login
          </v-btn>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup></script>
