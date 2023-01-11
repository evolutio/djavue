<template>
  <VLayout>
    <app-error-dialog :show="showErrorMessage" :message="errorMessage" @close="closeErrorDialog" />
    <VApp :theme="theme">
      <v-app-bar>
        <v-app-bar-title>My Todo List</v-app-bar-title>
        <template #append>
          <v-btn icon="mdi-heart" :to="{ name: 'basic-home' }"></v-btn>
          <v-btn icon="mdi-magnify"></v-btn>
          <v-btn
            :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
            @click="onClick"></v-btn>

          <v-btn icon="mdi-dots-vertical">
            <v-icon icon="mdi-dots-vertical" />
            <v-menu activator="parent">
              <v-list>
                <v-list-item :to="{ name: 'accounts-logout' }"> Sair </v-list-item>
              </v-list>
            </v-menu>
          </v-btn>
        </template>
      </v-app-bar>
      <VMain>
        <RouterView />
      </VMain>
      <app-footer :fixed="true" :user="loggedUser" />
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
import { mapState } from "pinia"
import { useAppStore } from "@/stores/appStore"
import { useAccountsStore } from "@/stores/accountsStore"
import AppSnackbar from "@/components/AppSnackbar.vue"
import AppErrorDialog from "@/components/AppErrorDialog.vue"
import AppFooter from "@/components/AppFooter.vue"

export default {
  name: "DefaultLayout",
  components: {
    AppSnackbar,
    AppErrorDialog,
    AppFooter,
  },
  setup() {
    const appStore = useAppStore()
    return { appStore }
  },
  computed: {
    ...mapState(useAppStore, ["errorMessage", "showErrorMessage"]),
    ...mapState(useAccountsStore, ["loggedUser"]),
  },
  methods: {
    closeErrorDialog() {
      this.appStore.setShowErrorMessage(null)
    },
  },
}
</script>
