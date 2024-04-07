<template>
  <nav class="dark:bg-gray-dark bg-white border-gray-200 dark:bg-gray-900">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <a href="https://flowbite.com/" class="flex items-center">
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
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
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
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="font-medium flex bg-white dark:bg-gray-dark flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li>
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
          </li>
          <li>
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
import ThemeButtonVue from "@/widget/ThemeButton.vue"
export default {
    components: {
    ThemeButtonVue,
  },
  props: ["currentTheme"],
  methods: {
    goTo(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style>
</style>