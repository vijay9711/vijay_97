<template>
  <div id="vj" class="bg-white h-screen dark:bg-gray-dark flex items-center px-10">
    <div class="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-1">
      <div class="self-content lg:w-9/12 sm:w-full sm:col-span-1 lg:m-auto lg:col-span-2 sm:mb-5">
        <p class="text-text-gray-dark sm:text-[2rem] lg:text-xl dark:text-white m-0">Hey,</p>
        <p class="text-text-gray-dark lg:text-8xl sm:text-[4rem] dark:text-white"> I'm <span class="lg:text-8xl sm:text-[4rem] dark:text-white">vijay</span></p>
        <p class="text-text-gray-dark sm:text-[1.1rem] lg:text-md dark:text-white">
          I am a Senior Software Development Engineer who is always discovering
          something new. Eager for opportunities in a dynamic, challenging environment to leverage my skills for personal growth and contribute to organizational success.
          Self-motivated IT professional with expertise in JavaScript, TypeScript, Angular JS, React JS, Vue JS, Node JS CSS, and mobile-responsive website development.
          Seeking a role that aligns with my passion for technology and allows me to make meaningful contributions to both my career and the organization.
        </p>
      </div>
      <div class="hi-vector col-span-2">
        <img src="../assets/welcome.svg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  }
};
</script>

<style scoped>

.self-content{
  align-content: end;
  align-items: end;
  text-align: left;

}
.hi-vector{
  display: flex;
  justify-content: space-around;
}
</style>