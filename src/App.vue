<template>
  <div id="particles-js">
    <div class="dark:bg-gray-dark bg-white z-50">
      <MainPageVue
        :currentTheme="darkMode"
        @onThemeChange="onThemeChange($event)"
      />
    </div>
    <div class="xs:-z-10 xs:absolute md:relative md:z-0">
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
  </div>
</template>

<script>
import MainPageVue from "./view/MainPage.vue";
import { useDark, useToggle } from "@vueuse/core";
// import particlesJS from "particles.js";
// import 'particles.js/particles';
// const particlesJS = window.particlesJS;
// particlesJS.load('particles-js', 'particles.json', null);
const isDark = useDark();
const toggleDark = useToggle(isDark);

// particlesJS.load("particles-js", "assets/particles.json", function () {
//       console.log("callback - particles-js config loaded");
//     });
export default {
  name: "App",
  components: {
    MainPageVue,
  },
  data() {
    return {
      darkMode: isDark.value,
    };
  },
  created() {
    // particlesJS.load("particles-js", "assets/particles.json", function () {
    //   console.log("callback - particles-js config loaded");
    // });
  },
  methods: {
    onThemeChange() {
      toggleDark();
    },
  },
};
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
::-webkit-scrollbar-track-piece {
  background: transparent;
}
::-webkit-scrollbar {
  background-color: transparent !important;
  height: 5px;
  width: 5px;
}

::-webkit-scrollbar-thumb {
  background-color: #41546b60;
  width: 5px;
  height: 5px;
  border-radius: 50px;
  transition-duration: 3s;
}
:hover::-webkit-scrollbar-thumb {
  background-color: #41546b90;
  border-radius: 50px;
}
::-webkit-scrollbar-track {
  background-clip: content-box;
}
</style>
<style lang="postcss">
body * {
  @apply transition-colors duration-300;
}
</style>
