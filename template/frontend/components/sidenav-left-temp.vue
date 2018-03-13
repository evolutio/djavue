<template>
  <v-navigation-drawer temporary v-model="state.left" fixed>
    <v-list dense>
      <v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title>Left temp</v-list-tile-title>
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