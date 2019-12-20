<template>
    <div class="wrapper">
        <radial-progress-bar 
        start-color="#6fa8dc"
        stop-color="#42b983"
        innerStrokeColor="#eee"
        :diameter="150" :completed-steps="latest" :total-steps="100">
            <b>{{ latest }}</b>
        </radial-progress-bar>
    </div>
</template>

<script>
import RadialProgressBar from "vue-radial-progress";

export default {
    computed: {
        latest() {
            return this.$store.getters.latest;
        }
    },

    components: {
        RadialProgressBar
    }
};
</script>

<style scoped>
.wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
}
</style>
