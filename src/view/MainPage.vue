<template>
  <div>
    <div class="sticky top-0">
      <nav-bar-vue :currentTheme="currentTheme" @onThemeChange="(event)=>{this.$emit('onThemeChange',event)}"/>
    </div>
    <div class="-mt-16">
      <LandingComponentVue />
      <ExperienceComponent />
      <ProjectComponent />
    </div>  
  </div>
</template>

<script>
import LandingComponentVue from '@/components/LandingComponent.vue'
import NavBarVue from '@/components/NavBar.vue'
import ExperienceComponent from '@/components/ExperienceComponent.vue';
import ProjectComponent from '@/components/ProjectComponent.vue';
export default {
  components:{
    LandingComponentVue,
    ExperienceComponent,
    ProjectComponent,
    NavBarVue,
  },
  props:['currentTheme'],
}
</script>

<style scoped>
  .main-wrapper{
    margin:0px 20px;
  }
</style>