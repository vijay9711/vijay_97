<template>
  <div class="dark:bg-gray-dark bg-white">
    <MainPageVue :currentTheme="darkMode" @onThemeChange="onThemeChange($event)"/>
    <!-- <router-link to="project">project</router-link> -->
  </div>
  <div>
    <router-view></router-view>
    <!-- <router-view v-slot="{ Component, route }">
        <transition
          :leave-active-class="route.meta.leaveClass"
          :enter-active-class="route.meta.enterClass"
        >
          <component :is="Component"></component>
        </transition>
      </router-view> -->
  </div>
</template>

<script>
import MainPageVue from './view/MainPage.vue';
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
export default {
  name: 'App',
  components: {
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
