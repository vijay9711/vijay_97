<template>
  <div
    id="experience"
    class="bg-white h-screen dark:bg-gray-dark flex items-center overflow-hidden"
  >
    <div class="lg:hidden md:block w-screen mt-10">
      <div class="flex col-span-2 px-10">
        <div class="text-white dark:white flex">
          <div
            class="text-white dark:text-white flex flex-col justify-center mt-0"
          >
            <div
              v-for="(item, i) in yearList"
              :key="i"
              class="rounded shadow-lg p-1 px-3 my-3 cursor-pointer duration-300 hover:bg-gray-dark hover:text-white dark:hover:bg-white dark:hover:text-gray-dark"
              @click="yearSelection(item, i)"
              :class="
                item.checked
                  ? 'bg-gray-dark text:white dark:bg-white dark:text-gray-dark '
                  : 'bg-white text-gray-dark dark:bg-gray-dark dark:text-white'
              "
            >
              {{ item.year }}
            </div>
          </div>
        </div>
        <div
          class="text-white dark:white flex-col flex justify-between mt-10 overflow-y-auto overflow-x-hidden py-6"
        >
          <div
            v-for="(item, index) in experinceList"
            :key="index"
            data-aos="fade-left"
            :data-aos-delay="item.duration"
            data-aos-easing="ease-in-out"
            class="border-l-4 shadow-lg border-l-gray-dark dark:border-l-white mx-10 p-3 my-3"
          >
            <div class="m-auto">
              <h5
                class="mb-2 text-2xl font-bold tracking-wide text-left flex text-gray-900 dark:text-white text-gray-dark"
              >
                {{ item.name }} ({{ item.year }})
              </h5>
              <p
                class="font-normal flex text-left dark:text-white text-gray-dark"
              >
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="lg:block md:hidden sm:hidden">
      <div class="text-white dark:text-white flex justify-center">
        <div
          v-for="(item, i) in yearList"
          :key="i"
          class="rounded shadow-lg p-1 px-3 mx-3 cursor-pointer duration-300 hover:bg-gray-dark hover:text-white dark:hover:bg-white dark:hover:text-gray-dark"
          @click="yearSelection(item, i)"
          :class="
            item.checked
              ? 'bg-gray-dark text:white dark:bg-white dark:text-gray-dark '
              : 'bg-white text-gray-dark dark:bg-gray-dark dark:text-white'
          "
        >
          {{ item.year }}
        </div>
      </div>
      <div
        class="flex items-center w-screen m-auto px-10 is-scrollbar overflow-x-auto"
        v-if="isExperinceList"
      >
        <ol class="items-center sm:flex w-full" id="eList">
          <li
            class="relative min-h-[400px] mb-6 sm:mb-0 sm:h-auto"
            v-for="(item, index) in experinceList"
            :key="index"
          >
            <div v-if="index % 2 == 0" class="h-[175px]"></div>
            <div
              v-if="index % 2 == 0"
              class="flex h-[50px] items-center justify-center"
            >
              <div
                class="z-10 flex items-center justify-center w-6 h-6 bg-gray-dark rounded-full ring-0 ring-gray-dark dark:bg-white sm:ring-8 dark:ring-white shrink-0"
              >
                <div
                  class="w-4 h-4 z-10 flex rounded-full shrink-0 bg-white dark:bg-gray-dark"
                ></div>
              </div>
              <div
                class="hidden line-width sm:flex bg-gray-dark h-0.5 dark:bg-white"
              ></div>
            </div>
            <div
              class="h-[175px] sm:pe-8 text-left justify-items-end"
              data-aos="fade-up"
              :data-aos-delay="item.duration"
              data-aos-easing="ease-in-out"
              v-if="index % 2 == 0"
            >
              <h3 class="text-lg font-semibold text-gray-dark dark:text-white">
                {{ item.name }}
              </h3>
              <time
                class="block mb-2 text-sm font-normal leading-none text-gray-dark dark:text-white"
                >{{ item.year }}</time
              >
              <p class="text-base font-normal text-gray-dark dark:text-white">
                {{ item.description }}
              </p>
              <p
                v-if="item.tech"
                class="text-base font-normal text-gray-dark dark:text-white"
              >
                <span>Tech:</span> {{ item.tech }}
              </p>
            </div>
            <div
              v-if="index % 2 != 0"
              class="h-[175px] sm:pe-8 text-left flex flex-col justify-end"
              data-aos="fade-down"
              :data-aos-delay="item.duration"
              data-aos-easing="ease-in-out"
            >
              <h3 class="text-lg font-semibold text-gray-dark dark:text-white">
                {{ item.name }}
              </h3>
              <time
                class="block mb-2 text-sm font-normal leading-none text-gray-dark dark:text-white"
                >{{ item.year }}</time
              >
              <p class="text-base font-normal text-gray-dark dark:text-white">
                {{ item.description }}
              </p>
            </div>
            <div
              v-if="index % 2 != 0"
              class="flex h-[50px] items-center justify-center"
            >
              <div
                class="z-10 flex items-center justify-center w-6 h-6 bg-gray-dark rounded-full ring-0 ring-gray-dark dark:bg-white sm:ring-8 dark:ring-white shrink-0"
              >
                <div
                  class="w-4 h-4 z-10 flex rounded-full shrink-0 bg-white dark:bg-gray-dark"
                ></div>
              </div>
              <div
                class="hidden line-width sm:flex bg-gray-dark h-0.5 dark:bg-white"
              ></div>
            </div>
            <div class="h-[175px]" v-if="index % 2 != 0"></div>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components:{
  },
  data() {
    return {
      yearList: [
        {
          year: 2019,
          checked: true,
        },
        {
          year: 2020,
          checked: false,
        },
        {
          year: 2021,
          checked: false,
        },
        {
          year: 2022,
          checked: false,
        },
        {
          year: 2023,
          checked: false,
        },
        {
          year: 2024,
          checked: false,
        },
      ],
      experinceListYearWise: {
        2019: [
          {
            name: "DIATOZ pvt solution",
            description: "Joined as a React js developer at DIATOZ solution.",
            duration: "300",
            year: "2019/05",
          },
          {
            name: "Secure Leaf",
            description:
              "Efficient junior React Developer adeptly completed daily tasks and seamlessly integrated a new feature in project.",
            duration: "400",
            year: "2019/05",
          },
          {
            name: "Vue js",
            description: "Had a chance to learn and work in Vue Js project.",
            duration: "500",
            year: "2019/08",
          },
          {
            name: "LIFEData",
            description:
              "Contributed as a junior developer, engaging with the team to learn and implement innovative features(OAuth, Dialogflow).",
            duration: "600",
            year: "2019/08",
          },
          {
            name: "Best team player",
            description:
              "Worked on multiple project with different technology.",
            duration: "700",
            year: "2019/10",
          },
        ],
        2020: [
          {
            name: "UI/UX",
            description:
              "Embark on a journey to learn UI/UX design for a comprehensive understanding of front-end development.",
            duration: "300",
            year: "2020/02",
          },
          {
            name: "OES(Onboarding Entertainment Solution)",
            description:
              "Implemented Google Maps to display live locations of multiple transports using customized marker icons. Developed various modules, customized sidebars, and implemented role management",
            duration: "400",
            year: "2020/08",
          },
          {
            name: "Moon light",
            description:
              "Successfully developed a Vue.js project with responsive UI, catering to the requirements of a project proof of concept.",
            duration: "500",
            year: "2020/09",
          },
          {
            name: "Sentinel",
            description:
              "Contributed to a streamlined user experience by optimizing data handling and visualization components. Skillfully managed large data sets from the backend, implementing lazy loading",
            duration: "600",
            year: "2020/12",
          },
        ],
        2021: [
          {
            name: "ERP(enterprise resource planning)",
            description:
              "Collaborated as an Angular developer, enhancing website security by closely connecting with backend developers.",
            duration: "300",
            year: "2021/01",
          },
          {
            name: "Angular Js",
            description:
              "Acquired advanced proficiency in Angular JS while actively contributing to an ERP project. Enhancing its capabilities through parallel development efforts.",
            duration: "400",
            year: "2021/01",
          },
          {
            name: "TXF(The X Future)",
            description:
              "As a senior developer, I specialized in crafting user interfaces, ensuring a seamless and intuitive experience. Additionally, I served as a Scrum Master in this project, actively engaging with team members to address their blockers and facilitate a smooth development process.",
            duration: "500",
            year: "2021/04",
          },
        ],
        2022: [
          {
            name: "SISA Information Security Pvt. Ltd.",
            description:
              "Undertook the role of Senior Associate Developer within Compliance & Testing Services, leading the optimization and integration of Angular code in the SISA Assistant web application. Initiated the enhancement of the SISA Assistant web application by strategically adding and optimizing Angular code, contributing to improved functionality and performance.",
            duration: "300",
            year: "2022/09",
          },
          {
            name: "SISA Assistant",
            description:
              "I played a pivotal role in the development and implementation of the SISA Assistant project, taking charge of role-based management and contributing to various modules and dashboard pages.",
            duration: "400",
            year: "2022/09",
          },
          {
            name: "Role Managment in SISA Assistant",
            description:
              "Enhanced SISA Assistant functionality by integrating role-based route access, allowing seamless navigation tailored to specific user roles.",
            duration: "500",
            year: 2019,
          },
        ],
        2023: [
          {
            name: "Maharishi international university, IOWA.",
            description:
              "Currently pursuing a Master's degree in Computer Science in Fairfield, Iowa, US, with a focus on specialized studies in web architecture, Java Spring Boot and enterprise architecture, aiming to deepen knowledge and expertise in these key areas during the course of the program.",
            duration: "300",
            year: "2023/09",
          },
          {
            name: "Library Management System (University Project)",
            description:
              "Designed a Java-based library management system with object-oriented programming principles, featuring a graphical user interface (GUI).",
            duration: "400",
            year: "2023/11",
          },
        ],
        2024: [
          {
            name: "Property Management System (University Project)",
            description:
              "Utilized React.js to build the user interface and integrated the functionality to favorite and unfavorite properties seamlessly using Spring Boot on the backend.",
            duration: "300",
            year: "2024/01",
          },
          {
            name: "Electronic Badge Scanner System(University Project)",
            description:
              "Develop an electronic badge scanner system with Spring Boot, Hibernate, MySQL, and Google OAuth for comprehensive security features.",
            duration: "400",
            year: "2024/02",
          },
        ],
      },
      experinceList: [],
      isExperinceList: true,
    };
  },
    created() {
    this.yearSelection(this.yearList[0], 0);
  },
  methods: {
    yearSelection(item, i) {
      this.experinceList = [];
      console.log(item);
      this.yearList.forEach((year) => (year.checked = false));
      this.yearList[i].checked = true;
      this.$nextTick(() => {
        this.experinceList = this.experinceListYearWise[this.yearList[i].year];
      });
    },
  },
};
</script>

<style scoped>
.is-scrollbar::-webkit-scrollbar {
  display: none;
}
.line-width {
  width: -webkit-fill-available;
}
</style>