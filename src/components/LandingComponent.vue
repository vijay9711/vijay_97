<template>
  <div id="vj" class="h-screen flex items-center px-10">
    <div class="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-1">
      <div class="self-content lg:w-9/12 sm:w-full sm:col-span-1 lg:m-auto lg:col-span-2 sm:mb-5">
        <p class="text-text-gray-dark sm:text-[2rem] lg:text-xl dark:text-white m-0">Hey, I'm <span class="lg:text-8xl sm:text-[4rem] dark:text-white">vijay</span></p>
        <!-- <p class="text-text-gray-dark lg:text-8xl xs:text-[2rem] sm:text-[4rem] dark:text-white"> </p> -->
        <p class="text-text-gray-dark sm:text-[1.1rem] lg:text-md dark:text-white d-ruby">
          Welcome to my portfolio! I'm a <span class="bg-purple justify-center flex px-5"> full-stack </span> Web Developer passionate about innovation and continuous learning. I excel in dynamic environments, driving personal growth and contributing to organizational success. Explore my projects and let's connect to create exceptional digital experiences together.
        </p>
      </div>
      <div class="hi-vector lg:col-span-2 relative">
        <!-- <img src="../assets/welcome.svg" class="lg:block sm:hidden xs:hidden" /> -->
        <HomeAnimateCard/>
      </div>
    </div>
  </div>
</template>

<script>
import HomeAnimateCard from './HomeAnimateCard.vue';
export default {
  components: {
    HomeAnimateCard
  }
};
</script>

<style scoped>

.self-content{
  align-content: end;
  align-items: end;
  text-align: left;
  /* margin-top: -200px; */
}
.d-ruby{
  display: ruby;

}
.hi-vector{
  display: flex;
  justify-content: space-around;
}
</style>