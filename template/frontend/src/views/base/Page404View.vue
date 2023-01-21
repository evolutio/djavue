<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-card>
        <v-card-title class="headline">Opps!</v-card-title>
        <v-card-text> Não foi possível achar está página </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" :to="{ name: 'base-home' }"> Início </v-btn>
        </v-card-actions>
      </v-card>
    </v-responsive>
  </v-container>
</template>

<script setup></script>
