<template>
  <div class="flex flex-wrap justify-center gap-6 pt-10">
    <div
      v-for="(skill, index) in skills"
      :key="index"
      class="max-w-sm w-full lg:w-1/4 p-6 bg-white shadow-md rounded-lg transform transition duration-500 hover:scale-105"
      data-aos="fade-up"
      :data-aos-delay="index * 200"
      data-aos-duration="1000"
    >
      <h3 class="text-xl font-semibold mb-4 text-gray-700">{{ skill.title }}</h3>
      <p class="text-gray-600">{{ skill.description }}</p>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      skills: [
        { title: 'JavaScript', description: 'Experienced in ES6+ features and frameworks.' },
        { title: 'Vue.js', description: 'Building scalable web applications with Vue.' },
        { title: 'Tailwind CSS', description: 'Responsive and modern design with utility-first CSS.' },
        { title: 'Node.js', description: 'Developing robust backend services and APIs.' },
      ],
    };
  },
};
</script>

<style scoped>
</style>
