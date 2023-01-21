<template>
  <div>
    <v-card>
      <v-card-text>
        <v-text-field
          v-model="title"
          :label="formLabel"
          required
          outlined
          append-icon="fa-pen"
          @keyup.enter="addNewTask" />
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    formLabel: {
      type: String,
      default: "",
    },
  },
  emits: ["newTask"],
  data: () => {
    return {
      title: "",
    }
  },
  methods: {
    addNewTask() {
      this.$emit("newTask", {
        title: this.title,
      })
      this.title = ""
    },
  },
}
</script>

<style scoped></style>
