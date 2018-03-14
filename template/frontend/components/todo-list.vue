<template>
  <v-card>
    <v-toolbar color="cyan" dark>
      <v-text-field class="ma-4" v-model="newtask" @keyup.enter="add()" label="Add todo and hit enter" :loading="adding"/>
    </v-toolbar>
    <v-progress-linear :indeterminate="true" v-if="loading"></v-progress-linear>
    <v-list two-line>
      <template v-for="item in items">
        <v-list-tile :key="item.title">
          <v-list-tile-content>
            <v-list-tile-title :class="{done: item.done}" >
              {{item.description}}
            </v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-switch v-model="item.done" :loading="item.done"/>
          </v-list-tile-action>
        </v-list-tile>
      </template>
    </v-list>
  </v-card>
</template>

<script>
import AppApi from '~apijs'
export default {
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
    AppApi.list_todos().then(response => {
      const todos = response.data.todos
      this.items = todos
      this.loading = false
    })
  },
  methods: {
    add () {
      this.adding = true
      AppApi.add_todo(this.newtask).then(response => {
        const todo = response.data
        this.items.push(todo)
        this.newtask = ''
        this.adding = false
      })
    }
  }
}
</script>

<style scoped>
  .done {
    text-decoration: line-through;
  }
</style>
