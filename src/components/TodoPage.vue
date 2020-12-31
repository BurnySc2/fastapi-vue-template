<template>
  <div class="flex flex-col">
    <div class="flex flex-row self-center">
      <input
        class="border-2 my-2 mx-1 p-2"
        type="text"
        v-model="newTodoText"
        placeholder="My new todo item"
      />
      <button class="border-2 my-2 mx-1 p-2" v-on:click="addTodo">Submit</button>
    </div>
    <div v-for="todo in todos" :key="todo.id" class="">
      <!--Passing the todo prop and the removeTodo function prop-->
      <Card v-bind:todo="todo" v-bind:removeTodo="removeTodo" />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card"
export default {
  name: "TodoPage",
  components: { Card },
  data() {
    // Object of state variables
    return {
      newTodoText: "",
      todos: [],
    }
  },
  methods: {
    // Function to fetch all todos
    async getTodos() {
      let response = await fetch("/api")
      if (response.ok) {
        this.todos = await response.json()
      } else {
        this.todos = [{ id: 0, content: "SERVER ERROR" }]
      }
    },
    // Function to add a new todo and grab all todos from database afterwards
    async addTodo() {
      await fetch(`/api/${this.newTodoText}`, {
        method: "POST",
      })
      this.newTodoText = ""
      await this.getTodos()
    },
    // Function to remove a todo by id
    async removeTodo(id) {
      await fetch(`/api/${id}`, {
        method: "DELETE",
      })
      await this.getTodos()
    },
  },
  // Run on site load
  async created() {
    await this.getTodos()
  },
}
</script>

<style scoped></style>
