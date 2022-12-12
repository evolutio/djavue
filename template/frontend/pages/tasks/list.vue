<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <v-card>
        <v-card-title class="headline"> Tasks </v-card-title>
      </v-card>
    </v-col>

    <v-col cols="12">
      <task-form :form-label="'Nova Tarefa'" @newTask="addNewTask" />
    </v-col>

    <v-col v-for="item in items" :key="item.id" cols="12">
      <task :task="item" />
    </v-col>
  </v-row>
</template>

<script>
import TasksApi from "@/api/tasks.api.js"
import Task from "~/components/Task.vue"
import TaskForm from "@/components/TaskForm.vue"

export default {
  name: "TasksList",
  components: { Task, TaskForm },
  data() {
    return {
      loading: false,
      items: [],
    }
  },
  mounted() {
    this.getTasks()
  },
  methods: {
    getTasks() {
      this.loading = true
      TasksApi.getTasks().then((data) => {
        this.items = data.todos
        this.loading = false
      })
    },
    addNewTask(task) {
      this.loading = true
      TasksApi.addNewTask(task.title).then((task) => {
        console.log("nova tarefa criada:", task)
        this.getTasks()
        this.loading = false
      })
    },
  },
}
</script>

<style scoped>
.done {
  text-decoration: line-through;
}
</style>
