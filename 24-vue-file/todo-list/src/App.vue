<template>
    <todo-list
        :todos="todos"
        :title="title"
        @task-add="addTodo($event.content, $event.done)"
        @stat-update="updateTitle"
    ></todo-list>
</template>

<script>
import Todo from "./components/Todo";

export default {
    components: {
        "todo-list": Todo
    },

    data() {
        return {
            title: "todos",
            todos: [
                { done: false, content: "design" },
                { done: false, content: "coding" },
                { done: false, content: "testing" }
            ]
        };
    },
    methods: {
        addTodo(content, done = false) {
            content = content.trim();
            if (content.length === 0) return;
            this.todos.push({
                done,
                content
            });
        },
        updateTitle(stat) {
            document.title = `TODO List (${stat.done} / ${stat.total})`;
        }
    }
};
</script>

<style>
body {
    font-family: "Helvetica Neue", Arial, sans-serif;
}

[v-cloak] {
    display: none;
}
</style>

<style scoped>
.red {
    color: red;
}
</style>
