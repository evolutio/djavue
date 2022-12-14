<template>
  <v-app dark>
    <app-side-bar
      :drawer="drawer"
      :clipped="clipped"
      :mini-variant="miniVariant"
      :items="items"
      :user="loggedUser" />

    <app-nav-bar
      :title="title"
      :clipped="clipped"
      :mini-variant="miniVariant"
      @drawerClick="drawer = !drawer"
      @clippedClick="clipped = !clipped"
      @miniVariantClick="miniVariant = !miniVariant"
      @fixedClick="fixed = !fixed" />

    <app-error-dialog :show="showErrorMessage" :message="errorMessage" />

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <app-footer :fixed="fixed" :user="loggedUser" />
  </v-app>
</template>

<script>
import { mapState } from "vuex"
import AppNavBar from "@/components/AppNavBar.vue"
import AppSideBar from "@/components/AppSideBar.vue"
import AppErrorDialog from "@/components/AppErrorDialog.vue"
import AppFooter from "@/components/AppFooter.vue"

export default {
  name: "DefaultLayout",
  components: {
    AppNavBar,
    AppSideBar,
    AppErrorDialog,
    AppFooter,
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [],
      miniVariant: false,
      title: "Djàvue",
    }
  },
  computed: {
    ...mapState({
      loggedUser: (state) => state.accounts.loggedUser,
      errorMessage: (state) => state.app.errorMessage,
      showErrorMessage: (state) => state.app.showErrorMessage,
    }),
  },
  mounted () {
    this.items = [
      {
        icon: "mdi-apps",
        title: "Bem-vindo",
        to: "/",
      },
      {
        icon: "mdi-chart-bubble",
        title: "Início",
        to: "/inicio",
      },
    ]
  },
}
</script>
