<template>
  <VLayout>
    <app-error-dialog :show="showErrorMessage" :message="errorMessage" @close="closeErrorDialog" />
    <app-snackbar />
    <VApp>
      <VMain>
        <RouterView />
      </VMain>
      <app-footer :fixed="true" :user="loggedUser" />
    </VApp>
  </VLayout>
</template>

<script>
import { mapState } from "pinia"
import { useAppStore } from "@/stores/appStore"
import { useAccountsStore } from "@/stores/accountsStore"
import AppSnackbar from "@/components/AppSnackbar.vue"
import AppErrorDialog from "@/components/AppErrorDialog.vue"
import AppFooter from "@/components/AppFooter.vue"

export default {
  name: "EmptyLayout",
  components: {
    AppSnackbar,
    AppErrorDialog,
    AppFooter,
  },
  setup() {
    const appStore = useAppStore()
    return { appStore }
  },
  computed: {
    ...mapState(useAppStore, ["errorMessage", "showErrorMessage"]),
    ...mapState(useAccountsStore, ["loggedUser"]),
  },
  methods: {
    closeErrorDialog() {
      this.appStore.setShowErrorMessage(null)
    },
  },
}
</script>
