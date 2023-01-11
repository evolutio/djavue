<template>
  <v-footer :absolute="!fixed" app>
    <span> &copy; {{ new Date().getFullYear() }} </span>
    <span v-if="user" class="pl-4">
      <v-icon>mdi-account</v-icon>
      {{ user.username }}
    </span>
    <div class="px-5 text-grey">
      <span class="px-5">API: {{ apiBaseUrl }}</span>
      <span class="px-5">ENV: {{ nodeEnv }}</span>
    </div>
  </v-footer>
</template>

<script>
export default {
  props: {
    fixed: {
      type: Boolean,
      default: true,
    },
    user: {
      type: Object,
      default: null,
    },
  },
  data: () => ({
    apiBaseUrl: import.meta.env.VITE_API_BASE_URL,
    nodeEnv: import.meta.env.VITE_NODE_ENV,
  }),
}
</script>
