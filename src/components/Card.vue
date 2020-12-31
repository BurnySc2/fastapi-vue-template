<template>
  <div class="flex flex-row">
    <button class="m-1 p-2 border-2" v-on:click="removeTodo(todo.id)">Remove</button>
    <div class="m-1 p-1">{{ todo.content }}</div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    todo: Object,
    removeTodo: Function,
  },
}
</script>

<style scoped></style>
