<template>
  <div id="app">
    <Home/>
    <Information/>
  </div>
</template>

<script>
import Home from './components/Home.vue';
import Information from './components/Information.vue';

export default {
  name: 'App',
  components: {
    Home,
    Information
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif; 
   -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
}
</style>
