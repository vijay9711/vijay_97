<template>
  <div
    class="group card rounded-2xl card-morphin bg-opacity-100 min-h-[15rem] overflow-hidden relative"
  >
    <div class="xs:p-3 md:p-5 text-left">
      <img
        class="transition-all duration-300 ease-in-out rounded-lg xs:h-[150px] md:h-[250px] w-full"
        :src="getUrl(project.imgName)"
        :alt="project.imgName"
      />
      <div>
      <div class="grid justify-between items-center mt-5 grid-cols-12">
        <p class="text-gray-dark dark:text-white lg:text-lg xs:text-8xl col-span-9 xs:font-bold ">{{ project.name }}</p>
        <div class="flex col-span-3 justify-end">
          <a class="rounded-full bg-gray-dark dark:bg-opacity-0" v-if="project.siteLink" :href="project.siteLink" target="_blank"> <img  class="w-[40px] cursor-pointer p-2 hover:p-1 duration-150 transition-all" src="../assets/project/icons/open.svg"></a>
          <a class="rounded-full bg-gray-dark dark:bg-opacity-0 ml-2" v-if="project.github" :href="project.github" target="_blank"> <img  class="w-[40px] cursor-pointer p-2 hover:p-1 duration-150 transition-all" src="../assets/project/icons/github.svg"></a>
        </div>
      </div>

      <p class="text-gray-dark dark:text-white mt-1">{{ project.about }}</p>
      </div>
    </div>
    <div
      class="lg:translate-y-full  transition-all duration-500 lg:group-hover:translate-y-0 tech-background rounded-lg flex flex-wrap lg:absolute lg:bottom-0 w-full py-3 h-fit"
    >
      <a
        class="bg-gray dark:bg-gray hover:bg-gray-dark dark:hover:bg-white rounded-full w-fit flex p-1 px-2 m-1 cursor-pointer"
        v-for="(item, index) in project.techUsed"
        :key="index"
        :href="item.link"
        target="_blank"
      >
        <img
          v-if="item.name"
          class="mr-1 lg:w-8 xs:w-5"
          :src="`https://img.icons8.com/${item.type}/48/${item.name}.png`"
          :alt="name"
        />
        <span class="lg:text-sm md:text-lg xs:text-xl text-white dark:text-gray-dark font-bold m-auto">{{
          item.lable
        }}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["project"],
  methods: {
    getUrl(name) {
      console.log(name);
      var images = require.context("../assets/project/", false, /\.png$/);
      return images("./" + name + ".png");
    },
  },
};
</script>

<style scoped>
.tech-background {
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(235, 235, 235, 0.3) 44%,
    rgba(210, 210, 210, 0) 92%
  );
}
.icon-color {
  background: white;
}
</style>