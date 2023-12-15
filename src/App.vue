<template>
  <div>
    <MainPageVue/>
  </div>
</template>

<script>
import MainPageVue from './view/MainPage.vue'
// import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  components: {
    // HelloWorld
    MainPageVue
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
