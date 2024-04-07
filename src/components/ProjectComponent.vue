<template>
  <div
    id="project"
    class="bg-white h-screen dark:bg-gray-dark items-center overflow-auto"
  >
    <div class="mx-[200px] grid grid-cols-3 gap-8 overflow-y-auto h-screen">
      <div class="max-w-sm rounded shadow-lg m-3" v-for="(project,index) in projects" :key="index">
        <ProjectCard/>
      </div>
    </div>
  </div>
</template>
<script>
import ProjectCard from './ProjectCard.vue';
export default {
  components:{
    ProjectCard
  },
  data() {
    return {
      projects:[1,2,3,4,5,6,7,8,9],
      projectList:[
        {
          name:""
        }
      ]
    };
  },
};
</script>
<style scoped>
</style>
