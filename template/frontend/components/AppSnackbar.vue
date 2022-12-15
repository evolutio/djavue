<template>
  <v-snackbar
    v-model="show" :color="snackbarCollors" multi-line top
    elevation="12" content-class="snackbar-ft-size"
    transition="slide-y-transition">
    {{ message }}
  </v-snackbar>
</template>

<script>
export default {
  data: () => {
    return {
      show: false,
      message: null,
      type: null,
    }
  },
  mounted () {
    this.$nuxt.$on("show-snackbar", (message, type) => {
      this.showSnackbar(message, type)
    })
  },
  computed: {
    snackbarCollors () {
      const typeCollor = {
        success: "primary",
        danger: "red",
        warning: "orange",
      }
      return `${typeCollor[this.type || "success"]} accent-4`
    },
  },
  methods: {
    showSnackbar (message, type) {
      this.message = message
      this.type = type
      this.show = true
    },
  },
}
</script>

<style>
.v-snack__content.snackbar-ft-size {
  font-size: 1.1rem;
}
</style>
