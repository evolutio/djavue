<template>
  <v-row>
    <v-col class="text-center">
      <img
        src="/v.png"
        alt="Vuetify.js"
        class="ma-5"
      >
      <blockquote class="blockquote text-h5">
        &#8220;Primeiro, resolva o problema. Depois, escreva o código.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
      <v-btn x-large rounded color="primary" dark :to="{ name: 'auth-login' }">
        Iniciar
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'InicioPage'
}
</script>
