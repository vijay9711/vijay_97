<template>
  <div
    id="project"
    class="bg-white h-screen dark:bg-gray-dark items-center overflow-hidden"
  >
    <div class="mx-[200px] grid grid-cols-3 gap-8">
      <div class="max-w-sm rounded overflow-hidden shadow-lg m-3" v-for="(project,index) in projects" :key="index">
        <img
          class="w-full"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Anatomy_of_a_Sunset-2.jpg"
          alt="Sunset in the mountains"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 text-gray-dark dark:text-white">
            The Coldest Sunset
          </div>
          <p class="text-gray-dark dark:text-white text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-dark dark:text-white mr-2 mb-2"
            >#photography</span
          >
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-dark dark:text-white mr-2 mb-2"
            >#travel</span
          >
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-dark dark:text-white mr-2 mb-2"
            >#winter</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      projects:[1,2,3,4,5,6]
    };
  },
};
</script>
<style scoped>
</style>
