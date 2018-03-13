<template>
  <v-navigation-drawer fixed v-model="state.drawer" app>
    <v-list dense>
      <v-list-tile @click.stop="state.left = !state.left">
        <v-list-tile-action>
          <v-icon>exit_to_app</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Open Temporary Drawer</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    props: ['state']
  }
</script>