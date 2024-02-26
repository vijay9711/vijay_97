<template>
  <div
    id="experience"
    class="bg-white h-screen dark:bg-gray-dark flex items-center overflow-hidden"
  >
    <div>
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
            class="relative min-h-[400px] mb-6 sm:mb-0"
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
              <p v-if="item.tech" class="text-base font-normal text-gray-dark dark:text-white">
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
            description: "Efficient junior React Developer adeptly completed daily tasks and seamlessly integrated a new feature in project.",
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
            description: "Contributed as a junior developer, engaging with the team to learn and implement innovative features(OAuth, Dialogflow).",
            duration: "600",
            year: "2019/08",
          },
          {
            name: "Best team player",
            description: "Worked on multiple project with different technology.",
            duration: "700",
            year: "2019/10",
          },
        ],
        2020: [
          {
            name: "UI/UX",
            description: "Start learning design UI/UX to get a clear idea and creative mind about fron-end.",
            duration: "300",
            year: "2020/02",
          },
          {
            name: "OES(Onboarding Entertainment Solution)",
            description: "Implemented Google Maps to display live locations of multiple transports using customized marker icons. Developed various modules, customized sidebars, and implemented role management",
            duration: "400",
            year: "2019/08",
          },
          {
            name: "Moon light",
            description: "Developed and optimized Vue JS project.",
            duration: "500",
            year: "2020/09",
          },
          {
            name: "Sentinel",
            description: "Contributed to a streamlined user experience by optimizing data handling and visualization components. Skillfully managed large data sets from the backend, implementing lazy loading",
            duration: "500",
            year: "2020/12",
          },
        ],
        2021: [
        {
            name: "Vue js",
            description: "Had a chance to learn and work in Vue Js project.",
            duration: "500",
            year: 2019,
          },
          {
            name: "Vue js",
            description: "Had a chance to learn and work in Vue Js project.",
            duration: "500",
            year: 2019,
          },
          {
            name: "Vue js",
            description: "Had a chance to learn and work in Vue Js project.",
            duration: "500",
            year: 2019,
          },
          {
            name: "Vue js",
            description: "Had a chance to learn and work in Vue Js project.",
            duration: "500",
            year: 2019,
          },
        ],
        2022: [

        {
            name: "Vue js",
            description: "Had a chance to learn and work in Vue Js project.",
            duration: "500",
            year: 2019,
          },
          {
            name: "Vue js",
            description: "Had a chance to learn and work in Vue Js project.",
            duration: "500",
            year: 2019,
          },
          {
            name: "Vue js",
            description: "Had a chance to learn and work in Vue Js project.",
            duration: "500",
            year: 2019,
          },
          {
            name: "Vue js",
            description: "Had a chance to learn and work in Vue Js project.",
            duration: "500",
            year: 2019,
          },
        ],
        2023: [
          {
            name: "SonicWall",
            period: "Start at 05/2023",
            description:
              "Resigned from DIATOZ Solution for career growth and joined at SonicWall as a Vue JS developer.",
            duration: "300",
            year: 2023,
          },
          {
            name: "SonicWall",
            period: "Start at 05/2023",
            description:
              "Resigned from DIATOZ Solution for career growth and joined at SonicWall as a Vue JS developer.",
            duration: "400",
            year: 2023,
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
      this.$nextTick(()=>{
        this.experinceList = this.experinceListYearWise[this.yearList[i].year];
      })
    },
  },
};
</script>

<style scoped>
.is-scrollbar::-webkit-scrollbar {
  display: none;
}
.line-width{
  width: -webkit-fill-available;
}
</style>