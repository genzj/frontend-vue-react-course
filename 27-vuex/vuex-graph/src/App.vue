<template>
  <div id="app">
    <data-source></data-source>
    <latest></latest>
    <history></history>
  </div>
</template>

<script>
import DataSource from './components/DataSource.vue'
import Latest from './components/Latest.vue'
import History from './components/History.vue'

export default {
  name: 'app',
  components: {
    DataSource,
    Latest,
    History
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
