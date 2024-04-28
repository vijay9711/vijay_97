<template>
  <div
    id="project"
    class="bg-white h-screen dark:bg-gray-dark items-center overflow-auto"
  >
    <div class="lg:mx-[300px] md:mx-[100px] mb-[50px] grid lg:grid-cols-2 xs:grid-cols-1">
      <div
        class="rounded-2xl shadow-lg m-5 mb-7 flex"
        v-for="(project, index) in projectList"
        :key="index"
      >
        <ProjectCard :project="project" />
      </div>
    </div>
  </div>
</template>
<script>
import ProjectCard from "./ProjectCard.vue";
export default {
  components: {
    ProjectCard,
  },
  data() {
    return {
      projectList: [
        {
          name: "Movie info",
          imgName: "movie_info",
          about:"Using dynamic TMDB APIs, I built a personal movie info website where you can see details of movies and TV series, along with their ratings, presented in a visually appealing UI that is responsive across different devices.",
          siteLink: "https://vijay9711.github.io/react_widget/",
          github:"https://github.com/vijay9711/react_widget",
          techUsed: [
            {
              name: "react-native",
              type: "color",
              lable:"React JS",
              source:"icon8"
            },
            {
              name: "nail-polish-",
              type: "emoji",
              lable:"Styled components",
              source:"icon8"
            },
            {
              name: "tailwindcss",
              type: "color",
              lable:"Tailwind CSS",
              source:"icon8"
            },
            {
              name:"themoviedb",
              type: "color",
              lable:"TMDB API's",
              source:"icon8"
            },
            {
              name:"github",
              type:"sf-regular-filled",
              lable:"Github Host",
              source:"icon8"
            }
          ],
        },
        {
          name: "Portfolio",
          imgName: "portfolio",
          about:"I built a portfolio website with Vue.js and Tailwind CSS to showcase my experience, projects, and personal background. The site features both light and dark themes, and it's designed to be responsive.",
          siteLink: "https://vijay97.netlify.app/",
          github:"https://github.com/vijay9711/vijay_97",
          techUsed: [
            {
              name: "vue-js",
              type: "color",
              lable:"Vue JS",
              source:"icon8"
            },
            {
              name: "tailwindcss",
              type: "color",
              lable:"Tailwind CSS",
              source:"icon8"
            },
            {
              name:"external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo",
              type: "external-tal-revivo-shadow-tal-revivo",
              lable:"Netlify",
              source:"icon8"
            }
          ],
        },
        {
          name: "Property Management(HOMVA)",
          imgName: "propertyManagement",
          about:"I developed a property management university project named HOMVA using React JSand Tailwind CSS for the frontend, and Spring Boot with JWT tokens for the backend. The project is completely secure, featuring logging, role-based access control, and functionalities to add, remove, and purchase properties.",
          // siteLink: "https://vijay97.netlify.app/",
          github:"https://github.com/vijay9711/HOMVA-front-end",
          techUsed: [
            {
              name: "react-native",
              type: "color",
              lable:"React JS",
              source:"icon8"
            },
            {
              name: "tailwindcss",
              type: "color",
              lable:"Tailwind CSS",
              source:"icon8"
            }
          ],
        },
      ],
    };
  },
};
</script>
<style scoped>
</style>
