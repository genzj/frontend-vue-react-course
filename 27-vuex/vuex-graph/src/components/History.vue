<script>
import Vue from "vue";
import Trend from "vuetrend";

Vue.use(Trend);

export default {
    computed: {
        data() {
            return this.$store.state.nums
        }
    }
};
</script>

<template>
    <div class="wrapper">
        <trend
            :data="data"
            :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
            auto-draw
            smooth
        ></trend>
    </div>
</template>

<style scoped>
.wrapper {
    width: 50%;
    margin: 10px auto;
}
</style>
