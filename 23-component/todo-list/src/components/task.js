import Vue from 'vue';
import './task.css';

Vue.component('todo-task', {
    props: ['done', 'content',],

    template: `
    <li @click="$emit('toggle')">
        <span v-if="done">✔</span>
        <span :class="{done: done}">{{ content }}</span>
    </li>`,
});

Vue.component('todo-task-container', {
    template: `<ul><slot></slot></ul>`
});
