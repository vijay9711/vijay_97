<template>
  <div class="flex flex-wrap">
    <p class="text-lg font-bold w-full text-left">Skills</p>
    <div class="divide-y"></div>
    <!-- <div> -->
      <div v-for="(item,i) in skills" :key="i" 
      class="skill border p-1 px-3 ml-0 m-1 rounded-3xl duration-300 transition-all hover:bg-white hover:text-gray-dark hover:font-semibold ">
      {{ item }}
    </div>
    <!-- </div> -->
    
  </div>
</template>

<script>
import { gsap } from 'gsap';
export default {
  data(){
    return{
      skills:["React JS", "Angular", "Vue JS", "Node JS", "Spring Boot", "UI/UX", "Jenkins", "AdobeXD", "JavaScript", "TypeScript", "Java", "Docker", "AWS", "GCP"]
    }
  },
  mounted(){
    this.initiateAnime();
  },
  methods:{
    initiateAnime(){
      gsap.fromTo(".skill", {
        y:15,
        opacity:0
      },{
        y:0,
        opacity:1,
        stagger:.1,
        duration:.2,
        // ease:"power2.out"
      })
    }
  }
}
</script>

<style>

</style>