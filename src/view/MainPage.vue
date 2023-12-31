<template>
  <div>
    <nav-bar-vue @onThemeChange="(event)=>{this.$emit('onThemeChange',event)}"/>
    <div class="main-wrapper">
      <LandingComponentVue />
    </div>  
  </div>
</template>

<script>
import LandingComponentVue from '@/components/LandingComponent.vue'
import NavBarVue from '@/components/NavBar.vue'

export default {
  components:{
    LandingComponentVue,
    NavBarVue
  }
}
</script>

<style>

</style>