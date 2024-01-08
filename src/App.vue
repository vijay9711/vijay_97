<template>
  <div :class='darkMode ? "dark" : ""' class="bg-gray-dark">
    <MainPageVue @onThemeChange="onThemeChange($event)"/>
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
  },
  data(){
    return{
      darkMode:true
    }
  },
  methods:{
    onThemeChange(event){
      this.darkMode = event;
      console.log(this.darkMode)
    }
  }
}
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
<style lang="postcss">
body * {
  @apply transition-colors duration-300;
}
</style>
