<template>
  <v-app-bar :clipped-left="false" fixed app>
    <v-app-bar-nav-icon @click.stop="drawerClick" />

    <v-toolbar-title v-text="title" />
    <v-spacer />
  </v-app-bar>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: "MyApp",
    },
  },
  data: () => {
    return {}
  },
  methods: {
    drawerClick () {
      this.$emit("drawerClick")
    },
  },
}
</script>
