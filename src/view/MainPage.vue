<template>
  <div>
    <div class="sticky top-0">
      <nav-bar-vue
        :currentTheme="currentTheme"
        @onThemeChange="
          (event) => {
            this.$emit('onThemeChange', event);
          }
        "
      />
    </div>
    <div class="overflow-x-hidden">
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
import NavBarVue from "@/components/NavBar.vue";
export default {
  components: {
    NavBarVue
  },
  props: ["currentTheme"],
  methods:{
  }
};
</script>

<style scoped>
.main-wrapper {
  margin: 0px 20px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.75s ease-out;
}

.slide-enter-to {
  position: absolute;
  right: 0;
}

.page{
  position: absolute;
  top: 30px;
}
.slide-enter-from {
  position: absolute;
  right: -100%;
}

.slide-leave-to {
  position: absolute;
  left: -100%;
}

.slide-leave-from {
  position: absolute;
  left: 0;
}
</style>