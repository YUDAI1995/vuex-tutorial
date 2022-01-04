<template>
<h2>All</h2>
  <ul class="todoList">
    <li v-for="todo in todoList" v-bind:key="todo.id">
      {{ todo.id }}. {{ todo.title }}
    </li>
  </ul>

  <h2>Doing</h2>
  <ul class="todoList">
    <li v-for="todo in doingList" v-bind:key="todo.id">
      {{ todo.id }}. {{ todo.title }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Todolist',
  computed: {
    todoList: function () {
      return this.$store.state.todoList;
    },
    doingList: function () {
      return this.$store.getters.getDoingList;
    },
  },
};
</script>
