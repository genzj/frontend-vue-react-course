<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/user/tom">Tom's page</router-link>
            <router-link to="/user/jerry">Jerry's page</router-link>
            <router-link to="/better-user/tom">Tom's Better page</router-link>
            <router-link to="/better-user/jerry">Jerry's Better page</router-link>
        </div>
        <Loading v-if="$root.loading"></Loading>
        <router-view v-else></router-view>
    </div>
</template>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a:not(:last-child)::after {
    content: "|";
    margin: 0 10px;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>

<script>
import Loading from "./components/Loading.vue";

export default {
    components: {
        Loading
    }
};
</script>
