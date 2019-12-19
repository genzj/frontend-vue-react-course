<template>
    <img :src="image" :alt="alt">
</template>

<script>
export default {
    props: ['code'],
    computed: {
        image() {
            return `https://http.cat/${this.code}.jpg`
        },
        alt() {
            return `HTTP error ${this.code}`
        }
    }
}
</script>
