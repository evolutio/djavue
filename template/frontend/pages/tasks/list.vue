<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <v-card>
        <v-card-title class="headline">
          Tasks
        </v-card-title>
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
  mounted () {
    this.loading = true
    TasksApi.getTasks().then((data) => {
      this.items = data.todos
      this.loading = false
    })
  }
}
</script>

<style scoped>
  .done {
    text-decoration: line-through;
  }
</style>
