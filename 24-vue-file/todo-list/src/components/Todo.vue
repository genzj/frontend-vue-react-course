<template>
    <div>
        <h1>{{ title | uppercase }} ({{ stat.done }} / {{ stat.total }})</h1>
        <p>
            <input
                type="text"
                @keyup.enter="$emit('task-add', {content: $event.target.value, done: $event.ctrlKey})"
                placeholder="enter task"
            >
        </p>
        <p v-if="!todos.length">No todos at this moment.</p>
        <TaskContainer>
            <Task
                v-for="(todo, index) in todos"
                :key="index"
                :done="todo.done"
                :content="todo.content"
                @toggle="todo.done = !todo.done"
            />
        </TaskContainer>
    </div>
</template>

<script>
import Task from './Task';
import TaskContainer from './TaskContainer';

export default {
    props: ['todos', 'title'],

    components: {
        Task,
        TaskContainer,
    },

    filters: {
        uppercase: function (value) {
            if (!value) return '';
            value = value.toString();
            return value.toUpperCase();
        }
    },

    computed: {
        stat() {
            const stat = {
                total: this.todos.length,
                done: this.todos.filter(e => e.done).length
            };
            this.$emit('stat-update', stat);
            return stat;
        }
    },
}
</script>
