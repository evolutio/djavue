<template>
  <VLayout>
    <VApp :theme="theme">
      <v-app-bar>
        <v-app-bar-title>My Todo List</v-app-bar-title>
        <template #append>
          <v-btn icon="mdi-heart"></v-btn>
          <v-btn icon="mdi-magnify"></v-btn>
          <v-btn
            :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
            @click="onClick"></v-btn>
          <v-btn icon="mdi-dots-vertical"></v-btn>
        </template>
      </v-app-bar>
      <VMain>
        <RouterView />
      </VMain>
    </VApp>
    <app-snackbar />
  </VLayout>
</template>

<script setup>
import { ref } from "vue"

const theme = ref("light")

function onClick() {
  theme.value = theme.value === "light" ? "dark" : "light"
}
</script>

<script>
import AppSnackbar from "@/components/AppSnackbar.vue"

export default {
  name: "DefaultLayout",
  components: {
    AppSnackbar,
  },
}
</script>
