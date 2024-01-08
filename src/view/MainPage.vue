<template>
  <div>
    <div class="sticky top-0">
      <nav-bar-vue @onThemeChange="(event)=>{this.$emit('onThemeChange',event)}"/>
    </div>
    <div class="-mt-16">
      <LandingComponentVue />
      <ExperienceComponent />
    </div>  
  </div>
</template>

<script>
import LandingComponentVue from '@/components/LandingComponent.vue'
import NavBarVue from '@/components/NavBar.vue'
import ExperienceComponent from '@/components/ExperienceComponent.vue';
export default {
  components:{
    LandingComponentVue,
    ExperienceComponent,
    NavBarVue,
    
  }
}
</script>

<style scoped>
  .main-wrapper{
    margin:0px 20px;
  }
</style>