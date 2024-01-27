<template>
  <div >
    <MainPageVue :currentTheme="darkMode" @onThemeChange="onThemeChange($event)"/>
  </div>
</template>

<script>
import MainPageVue from './view/MainPage.vue';
import { useDark, useToggle } from "@vueuse/core";
// import HelloWorld from './components/HelloWorld.vue';
const isDark = useDark();
const toggleDark = useToggle(isDark);
export default {
  name: 'App',
  components: {
    // HelloWorld
    MainPageVue
  },
  data(){
    return{
      darkMode: isDark.value,
    }
  },
  methods:{
    onThemeChange(){
      toggleDark();
      // this.darkMode = event;
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
::-webkit-scrollbar-track-piece{
  background: transparent;
}
::-webkit-scrollbar{
  background-color: transparent !important;
  height: 5px;
  width: 5px;
}

::-webkit-scrollbar-thumb{
  background-color: #41546b60;
  width: 5px;
  height: 5px;
  border-radius: 50px;
  transition-duration: 3s;
}
:hover::-webkit-scrollbar-thumb{
  background-color: #41546b90;
  border-radius: 50px;
}
::-webkit-scrollbar-track{
  background-clip: content-box;
}
</style>
<style lang="postcss">
body * {
  @apply transition-colors duration-300;
}
</style>
