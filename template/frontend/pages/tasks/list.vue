<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <v-card>
        <v-card-title class="headline">
          Tasks
        </v-card-title>
      </v-card>
    </v-col>

    <v-col cols="12">
      <v-card>
        <v-card-text>
          <v-text-field
            v-model="newtask"
            label="Nova tarefa"
            required
            outlined
            append-icon="fa-pen"
            @keyup.enter="addNeTask"
          />
        </v-card-text>
      </v-card>
    </v-col>

    <v-col v-for="item in items" :key="item.id" cols="12">
      <v-card>
        <v-card-text>
          <div>#{{ item.id }}</div>
          <p class="ma-0 pa-0 text-h5 text--primary">
            {{ item.description }}
          </p>
          <v-switch v-model="item.done" :loading="item.done" />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import TasksApi from '@/api/tasks.api.js'

export default {
  name: 'TasksList',
  data () {
    return {
      newtask: '',
      adding: false,
      loading: false,
      items: [
      ]
    }
  },
  methods: {
    getTasks() {
      this.loading = true
      TasksApi.getTasks().then((data) => {
        this.items = data.todos
        this.loading = false
      })
    },
    addNeTask() {
      this.loading = true
      TasksApi.addNeTask(this.newtask).then((data) => {
        console.log(data)
        this.getTasks()
        this.loading = false
      })
    },
  },
  mounted () {
    this.getTasks()
  }
}
</script>

<style scoped>
  .done {
    text-decoration: line-through;
  }
</style>
