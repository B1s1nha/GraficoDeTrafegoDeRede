<template>
  <ChartJs/>
</template>

<script>
import ChartJs from "./components/ChartJs.vue";

export default {
  name: 'App',
  components: {
    ChartJs
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
