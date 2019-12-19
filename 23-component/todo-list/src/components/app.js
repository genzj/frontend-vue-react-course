import Vue from 'vue';
import './todo';


Vue.component('todo-app', {
    template: `
        <todo-list
            :todos="todos"
            :title="title"
            @task-add="addTodo($event.content, $event.done)"
            @stat-update="updateTitle"
        ></todo-list>`,

    data() {
        return {
            title: 'todos',
            todos: [
                { done: false, content: 'design' },
                { done: false, content: 'coding' },
                { done: false, content: 'testing' },
            ]
        };
    },
    methods: {
        addTodo(content, done = false) {
            content = content.trim();
            if (content.length === 0) return;
            this.todos.push({
                done,
                content,
            });
        },
        updateTitle(stat) {
            document.title = `TODO List (${stat.done} / ${stat.total})`;
        }
    },
});
