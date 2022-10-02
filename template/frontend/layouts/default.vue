<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          v-if="loggedUser"
          :to="'/tasks/list'"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>mdi-apps</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="'Tasks List'" />
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          v-if="loggedUser"
          :to="'/auth/logout'"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>mdi-apps</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="'Logout'" />
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          v-else
          :to="'/auth/login'"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>mdi-apps</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="'Login'" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span> &copy; {{ new Date().getFullYear() }} </span><span class="pl-4" v-if="loggedUser"><v-icon>mdi-account</v-icon> {{ loggedUser.user.username }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [],
      miniVariant: false,
      right: true,
      title: 'Djàvue {{ name }}'
    }
  },
  computed: {
    loggedUser() {
      return this.$store.getters.loggedUser
    }
  },
  mounted() {
    this.items = [
      {
        icon: 'mdi-apps',
        title: 'Bem-vindo',
        to: '/'
      },
      {
        icon: 'mdi-chart-bubble',
        title: 'Início',
        to: '/inicio'
      },
    ]
  }
}
</script>
