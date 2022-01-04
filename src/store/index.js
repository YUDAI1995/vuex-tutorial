import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    title: 'Todo',
    todoList: [],
    count: 0,
  },
  getters: {
    getDoingList: function (state) {
      return state.todoList.filter((todo) => todo.completed === false);
    },
  },
  mutations: {
    Increment: function (state, number) {
      state.count = state.count + number;
    },
    setTodoList: function (state, todoList) {
      state.todoList = todoList;
    },
  },
  actions: {
    oneIncrement: function (context) {
      context.commit('Increment', 1);
    },
    getTodoList: function ({ commit }) {
      return axios
        .get('https://jsonplaceholder.typicode.com/todos')
        .then((res) => {
          commit('setTodoList', res.data);
        });
    },
  },
  modules: {},
});
