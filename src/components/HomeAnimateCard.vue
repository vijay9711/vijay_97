<template>
  <div class="relative w-full h-full" id="anime-box">
    <p class="dark:text-white text-8xl font-bold ">FULL<br/>STACK</p>
  </div>
</template>

<script>
// import { gsap } from 'gsap';

export default {
 created(){
  this.startAnimate();
 },
 methods:{
  startAnimate(){
    console.log("animate baground");
    // let boxClass = `w-{${Math.random()}}`;
    // let animeBox = document.getElementById('anime-box');
    // for(let i = 0; i < bgBoxes; i++){
    //   let newEle = document.createElement('div');
    // }
  }
 }
}
</script>

<style>

</style>