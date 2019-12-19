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
  filters: {
    uppercase: function (value) {
      if (!value) return '';
      value = value.toString();
      return value.toUpperCase();
    }
  }
});
