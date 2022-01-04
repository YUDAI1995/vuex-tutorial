<template>
  <Header />
  <Todolist />

  <h2>Conter</h2>
  <p>{{ count }}</p>
  <button v-on:click.prevent="increment">ADD</button>
</template>

<script>
import Header from './components/Header.vue';
import Todolist from './components/Todolist.vue';

export default {
  name: 'App',
  components: {
    Header,
    Todolist,
  },
  mounted() {
    this.$store.dispatch('getTodoList');
  },
  computed: {
    title: function () {
      return this.$store.state.title;
    },
    count: function () {
      return this.$store.state.count;
    },
  },
  methods: {
    increment: function () {
      this.$store.dispatch('oneIncrement');
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
