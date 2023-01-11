<template>
  <v-snackbar
    v-model="showSnackbar"
    :color="snackbarCollors"
    multi-line
    top
    elevation="12"
    content-class="snackbar-ft-size"
    transition="slide-y-transition">
    {{ snackbarMessage }}
  </v-snackbar>
</template>

<script>
import { mapState } from "pinia"
import { useAppStore } from "@/stores/appStore"

export default {
  setup() {
    const appStore = useAppStore()
    return { appStore }
  },
  computed: {
    ...mapState(useAppStore, ["snackbarMessage", "type", "showSnackbarMessage"]),
    showSnackbar: {
      get() {
        return this.showSnackbarMessage
      },
      set(value) {
        this.appStore.showSnackbar(value)
      },
    },
    snackbarCollors() {
      const typeCollor = {
        success: "primary",
        danger: "red",
        warning: "orange",
      }
      return `${typeCollor[this.type || "success"]} accent-4`
    },
  },
}
</script>

<style>
.v-snack__content.snackbar-ft-size {
  font-size: 1.1rem;
}
</style>
