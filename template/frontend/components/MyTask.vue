<template>
  <div>
    <div>#{{ task.id }}</div>
    <p class="ma-0 pa-0 text-h5 text--primary">
      {{ task.description }}
    </p>
  </div>
</template>

<script>
export default {
  props: ['task'],
  data: () => ({})
}
</script>
