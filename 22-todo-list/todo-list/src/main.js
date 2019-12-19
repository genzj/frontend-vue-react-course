import Vue from 'vue'
import './main.css'


Vue.config.productionTip = false;


window.vm = new Vue({
  el: '#demo',
  data: {
    title: 'todos',
    todos: [
      { done: false, content: 'design' },
      { done: false, content: 'coding' },
      { done: false, content: 'testing' },
    ]
  },
  computed: {
    stat() {
      return {
        total: this.todos.length,
        done: this.todos.filter(e => e.done).length
      };
    }
  },
  // watch: {
  //   todos: function() {
  //     this.updateTitle();
  //   }
  // },
  methods: {
    addTodo(content, done=false) {
      content = content.trim();
      if (content.length === 0) return;
      this.todos.push({
        done,
        content,
      });
    },
    updateTitle() {
      document.title = `TODO List (${this.stat.done} / ${this.stat.total})`;
    }
  },
  filters: {
    uppercase: function (value) {
      if (!value) return '';
      value = value.toString();
      return value.toUpperCase();
    }
  },
  created() {
    // this.updateTitle();
    this.unwatch = this.$watch(
      'todos',
      () => this.updateTitle(),
      {
        deep: true,
        immediate: true,
      }
    );
  },
  beforeDestroy() {
    this.unwatch && this.unwatch();
  },
});
