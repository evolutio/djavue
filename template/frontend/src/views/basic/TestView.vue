<template>
  <v-container>
    <v-row align="start" no-gutters style="height: 150px">
      <v-col cols="12">
        <v-sheet class="pa-2"> .v-col-12 </v-sheet>
      </v-col>
      <v-col cols="4">
        <v-sheet class="pa-2"> .v-col-4 </v-sheet>
      </v-col>
      <v-col cols="8">
        <v-sheet class="pa-2"> .v-col-8 </v-sheet>
      </v-col>
    </v-row>

    <h1>Test</h1>
  </v-container>
  <v-bottom-navigation>
    <v-btn value="recent">
      <v-icon>mdi-history</v-icon>

      Recent
    </v-btn>

    <v-btn value="favorites">
      <v-icon>mdi-heart</v-icon>

      Favorites
    </v-btn>

    <v-btn value="nearby">
      <v-icon>mdi-map-marker</v-icon>

      Nearby
    </v-btn>
  </v-bottom-navigation>
</template>

<script setup>
//
</script>
