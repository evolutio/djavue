<template>
  <v-app-bar
    :clipped-left="clipped"
    fixed
    app>
    <v-app-bar-nav-icon @click.stop="drawerClick" />
    <v-btn
      icon
      @click.stop="miniVariantClick">
      <v-icon>
        mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}
      </v-icon>
    </v-btn>
    <v-btn
      icon
      @click.stop="clippedClick">
      <v-icon>
        mdi-application
      </v-icon>
    </v-btn>
    <v-btn
      icon
      @click.stop="fixedClick">
      <v-icon>
        mdi-minus
      </v-icon>
    </v-btn>
    <v-toolbar-title v-text="title" />
    <v-spacer />
  </v-app-bar>
</template>

<script>
export default {
  props: {
    clipped: {
      type: Boolean,
      required: true,
    },
    miniVariant: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: false,
      default: "MyApp",
    },
  },
  data: () => {
    return {
    }
  },
  methods: {
    drawerClick () {
      this.$emit("drawerClick")
    },
    clippedClick () {
      this.$emit("clippedClick")
    },
    miniVariantClick () {
      this.$emit("miniVariantClick")
    },
    fixedClick () {
      this.$emit("fixedClick")
    },
  },
}
</script>
