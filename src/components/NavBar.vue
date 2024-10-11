<template>
  <nav class="dark:bg-gray-dark bg-white border-gray-200 dark:bg-gray-900">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <a href="https://vijay97.netlify.app/" class="flex items-center">
        <img
          src="../assets/logo/Vijay.svg"
          class="h-8 block dark:hidden"
          alt="Flowbite Logo"
        />
        <img
          src="../assets/logo/VijayWhite.svg"
          class="h-8 hidden dark:block"
          alt="Flowbite Logo"
        />
      </a>
      <div
        class="w-full xs:transition-transform xs:translate-x-full bg-white dark:bg-gray-dark md:translate-x-0 md:block md:w-auto xs:h-[25vh] xs:rounded-bl-full lg:relative md:relative sm:absolute xs:absolute xs:top-0 s:top-0 xs:right-0 s:right-0 lg:h-auto md:h-auto xs:w-[40vw] md:shadow-none"
        aria-labelledby="drawer-navigation-label"
        :class="isSideBar ? 'xs:!translate-x-0 shadow-sidebar' : ''"
        id="navbar-default"
      >
        <button
          v-if="this.isSideBar"
          class="p-4 items-start absolute -left-16 text-gray-dark dark:text-white"
          :onclick="
            () => {
              this.isSideBar = !this.isSideBar;
            }
          "
        >
          <img
            class="w-[30px] p-0 text-gray-dark dark:text-white bg-white rounded-full"
            src="../assets/closeArrow.svg"
            alt="close arrow"
          />
        </button>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center absolute -left-10 top-4 p-2 w-10 md:h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none dark:text-white"
          v-if="!this.isSideBar"
          aria-expanded="false"
          :onclick="
            () => {
              this.isSideBar = !this.isSideBar;
            }
          "
          data-drawer-target="drawer-navigation"
          data-drawer-show="drawer-navigation"
          aria-controls="drawer-navigation"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <ul
          class="font-medium xs:border-none flex bg-white dark:bg-gray-dark lg:items-center xs:rounded-bl-full xs:h-full lg:h-auto md:h-auto xs:mt-0 s:mt-0 xs:flex sm:flex flex-col p-4 md:p-0 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 xs:items-end"
        >
          <!-- <li>
            <a
              @click="() => goTo('/')"
              class="block cursor-pointer py-2 bg-white text-gray-dark dark:bg-gray-dark px-3 bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
              aria-current="page"
              >Welcome</a
            >
          </li>
          <li>
            <a
              @click="() => goTo('/experience')"
              class="block cursor-pointer py-2 bg-white text-gray-dark dark:bg-gray-dark px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >Experience</a
            >
          </li>
          <li>
            <a
              @click="() => goTo('/project')"
              class="block cursor-pointer py-2 bg-white text-gray-dark dark:bg-gray-dark px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >Project</a
            >
          </li> -->
          <li v-for="(item,index) of navItem" :key="index">
            <a
              @click="() => goTo(item.path)"
              class="block cursor-pointer py-2 bg-white text-gray-dark dark:bg-gray-dark px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >{{ item.name }}</a
            >
          </li>
          <li class="mt-auto">
            <ThemeButtonVue
              :currentTheme="currentTheme"
              @theme="
                (event) => {
                  this.$emit('onThemeChange', event);
                }
              "
            />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import ThemeButtonVue from "@/widget/ThemeButton.vue";
export default {
  components: {
    ThemeButtonVue,
  },
  data() {
    return {
      isSideBar: false,
      navItem:[
        {
          name:'Welcome',
          path:"/"
        },
        {
          name:"Experience",
          path:"/experience"
        },
        {
          name:"Project",
          path:"/project"
        },
        {
          name:"Who am I?",
          path:"/about-me"
        }
      ]
    };
  },
  props: ["currentTheme"],
  methods: {
    goTo(path) {
      this.isSideBar = false;
      this.$router.push(path);
    },
  },
  directives: {
    clickOutside: {
      bind: function (el, binding, vnode) {
        console.log("click functions");
        el.clickOutsideEvent = function (event) {
          // Check if the clicked element is outside the bound element and its children
          if (!(el === event.target || el.contains(event.target))) {
            // Call the method provided in the directive's value
            vnode.context[binding.expression](event);
          }
        };
        document.body.addEventListener("click", el.clickOutsideEvent);
      },
      unbind: function (el) {
        // Remove the event listener when the directive is unbound
        document.body.removeEventListener("click", el.clickOutsideEvent);
      },
    },
  },
};
</script>

<style>
</style>