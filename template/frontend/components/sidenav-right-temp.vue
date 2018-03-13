<template>
  <v-navigation-drawer right temporary v-model="state.right" fixed>
    <v-list dense>
      <v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title>Right temp</v-list-tile-title>
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