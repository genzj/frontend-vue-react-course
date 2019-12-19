<template>
    <li @click="$emit('toggle')">
        <span v-if="done">✔</span>
        <span :class="{done: done}">{{ content }}</span>
    </li>
</template>

<script>
export default {
    props: ['done', 'content',],
}
</script>

<style scoped>
    .done {
        text-decoration: line-through;
        color: #ccc;
    }
</style>

