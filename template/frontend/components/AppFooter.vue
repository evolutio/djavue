<template>
  <v-footer
    :absolute="!fixed"
    app>
    <span> &copy; {{ new Date().getFullYear() }} </span><span
      v-if="user"
      class="pl-4"><v-icon>mdi-account</v-icon> {{ user.username }}</span>
  </v-footer>
</template>

<script>
export default {
  props: ["fixed", "user"],
  data: () => ({}),
}
</script>
