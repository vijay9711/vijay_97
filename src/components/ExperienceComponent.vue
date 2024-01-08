<template>
  <div id="experience" class="bg-white h-screen dark:bg-gray-dark flex items-center px-10 overflow-x-auto">

    <ol v-for="(item,index) in experinceList" :key="index" class="items-center sm:flex">
      <li class="relative min-w-[400px] min-h-[400px] mb-6 sm:mb-0" v-if="index%2 == 0">
          <div class="h-[175px]"></div>
          <div class="flex h-[50px] items-center justify-center">
              <div class="z-10 flex items-center justify-center w-6 h-6 bg-gray-dark rounded-full ring-0 ring-gray-dark dark:bg-white sm:ring-8 dark:ring-white shrink-0">
                  <div class="w-4 h-4 z-10 flex rounded-full shrink-0 bg-white dark:bg-gray-dark"></div>
              </div>
              <div class="hidden w-[400px] sm:flex bg-gray-dark h-0.5 dark:bg-white"></div>
          </div>
          <div class="h-[175px] sm:pe-8 text-left justify-items-end">
              <h3 class="text-lg font-semibold text-gray-dark dark:text-white">{{ item.name }}</h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-dark dark:text-white">{{ item.period }}</time>
              <p class="text-base font-normal text-gray-dark dark:text-white">{{ item.description }}</p>
          </div>
      </li>
      <li class="relative min-w-[400px] min-h-[400px] mb-6 sm:mb-0" v-if="index%2 != 0">
          <div class="h-[175px] sm:pe-8 text-left flex flex-col justify-end">
              <h3 class="text-lg font-semibold text-gray-dark dark:text-white">{{ item.name }}</h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-dark dark:text-white">{{ item.period }}</time>
              <p class="text-base font-normal text-gray-dark dark:text-white">{{ item.description }}</p>
          </div>
          <div class="flex h-[50px] items-center justify-center">
              <div class="z-10 flex items-center justify-center w-6 h-6 bg-gray-dark rounded-full ring-0 ring-gray-dark dark:bg-white sm:ring-8 dark:ring-white shrink-0">
                  <div class="w-4 h-4 z-10 flex rounded-full shrink-0 bg-white dark:bg-gray-dark"></div>
              </div>
              <div class="hidden w-[400px] sm:flex bg-gray-dark h-0.5 dark:bg-white"></div>
          </div>
          <div class="h-[175px]"></div>
      </li>
    </ol>
    <ol class="items-center sm:flex" :v-if="false">
      <li class="relative min-w-[400px] min-h-[400px] mb-6 sm:mb-0">
          <div class="h-[175px]"></div>
          <div class="flex h-[50px] items-center justify-center">
              <div class="z-10 flex items-center justify-center w-6 h-6 bg-gray-dark rounded-full ring-0 ring-gray-dark dark:bg-white sm:ring-8 dark:ring-white shrink-0">
                  <div class="w-4 h-4 z-10 flex rounded-full shrink-0 bg-white dark:bg-gray-dark"></div>
              </div>
              <div class="hidden w-[400px] sm:flex bg-gray-dark h-0.5 dark:bg-white"></div>
          </div>
          <div class="h-[175px] sm:pe-8 text-left justify-items-end">
              <h3 class="text-lg font-semibold text-gray-dark dark:text-white">DIATOZ Solution pvt</h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-dark dark:text-white">05/2019 - 05/2022</time>
              <p class="text-base font-normal text-gray-dark dark:text-white">Started as a React js.</p>
          </div>
      </li>
      <li class="relative min-w-[400px] min-h-[400px] mb-6 sm:mb-0">
          <div class="h-[175px] sm:pe-8 text-left justify-items-end flex flex-col">
              <h3 class="text-lg font-semibold text-gray-dark dark:text-white">DIATOZ Solution pvt</h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-dark dark:text-white">05/2019 - 05/2022</time>
              <p class="text-base font-normal text-gray-dark dark:text-white">Started as a React js.</p>
          </div>
          <div class="flex h-[50px] items-center justify-center">
              <div class="z-10 flex items-center justify-center w-6 h-6 bg-gray-dark rounded-full ring-0 ring-gray-dark dark:bg-white sm:ring-8 dark:ring-white shrink-0">
                  <div class="w-4 h-4 z-10 flex rounded-full shrink-0 bg-white dark:bg-gray-dark"></div>
              </div>
              <div class="hidden w-[400px] sm:flex bg-gray-dark h-0.5 dark:bg-white"></div>
          </div>
          <div class="h-[175px]"></div>
      </li>
    </ol>
  </div>
</template>

<script>
export default {

  data(){
    return {
      width:'400px',
      experinceList:[
        {
          isCompnany:true,
          name:'DIATOZ pvt solution',
          period:'05/2019 - 05/2022',
          description:'Joined as a React js developer.',
        },
        {
          isCompnany:false,
          name:'React js',
          period:'start at 05/2019',
          description:'Deep learning and project work in React V16.8.'
        },
        {
          isCompnany:false,
          name:'Vue js',
          period:'start at 10/2019',
          description:'Learn and work on vue js project.'
        },
        {
          isCompnany: false,
          name: 'UI/UX',
          period:'Start at 02/2020',
          description: 'Understanding and developing UI/UX designs own intrest.'
        },
        {
          isCompnany: false,
          name: 'Angular',
          period:'Start at 03/2020',
          description: 'Develope a ERP project using angular 11.'
        }
      ]
    }
  }
}
</script>

<style>

</style>