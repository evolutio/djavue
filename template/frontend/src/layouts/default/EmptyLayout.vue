<template>
  <VLayout>
    <VApp>
      <VMain>
        <RouterView />
      </VMain>
    </VApp>
    <app-snackbar />
  </VLayout>
</template>

<script>
import AppSnackbar from "@/components/AppSnackbar.vue"

export default {
  name: "EmptyLayout",
  components: {
    AppSnackbar,
  },
}
</script>
