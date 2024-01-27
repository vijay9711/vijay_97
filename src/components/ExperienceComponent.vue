<template>
  <div id="experience" class="bg-white h-screen dark:bg-gray-dark flex items-center overflow-hidden">
    <!-- <div>Button</div>
    <div>Button next</div> -->
    <div class="flex items-center overflow-x-auto w-screen m-auto px-10 is-scrollbar">
      <ol v-for="(item,index) in experinceList" :key="index" class="items-center sm:flex" >
        <li class="relative min-w-[400px] min-h-[400px] mb-6 sm:mb-0" v-if="index%2 == 0">
            <div class="h-[175px]" >
                <div class="text-gray-dark dark:text-white" v-if="item.year">
                {{ item.year }}
              </div>
            </div>
            <div class="flex h-[50px] items-center justify-center">
                <div class="z-10 flex items-center justify-center w-6 h-6 bg-gray-dark rounded-full ring-0 ring-gray-dark dark:bg-white sm:ring-8 dark:ring-white shrink-0">
                    <div class="w-4 h-4 z-10 flex rounded-full shrink-0 bg-white dark:bg-gray-dark"></div>
                </div>
                <div class="hidden w-[400px] sm:flex bg-gray-dark h-0.5 dark:bg-white"></div>
            </div>
            <div class="h-[175px] sm:pe-8 text-left justify-items-end " data-aos="fade-up" :data-aos-delay="item.duration" data-aos-easing="ease-in-out" >
                <h3 class="text-lg font-semibold text-gray-dark dark:text-white">{{ item.name }}</h3>
                <time class="block mb-2 text-sm font-normal leading-none text-gray-dark dark:text-white">{{ item.period }}</time>
                <p class="text-base font-normal text-gray-dark dark:text-white">{{ item.description }}</p>
            </div>
        </li>
        <li class="relative min-w-[400px] min-h-[400px] mb-6 sm:mb-0" v-if="index%2 != 0">
            <div class="h-[175px] sm:pe-8 text-left flex flex-col justify-end" data-aos="fade-down" :data-aos-delay="item.duration" data-aos-easing="ease-in-out">
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
    </div>
    
  </div>
</template>

<script>
export default {

  data(){
    return {
      experinceList:[
        {
          isCompnany:true,
          name:'DIATOZ pvt solution',
          period:'05/2019',
          description:'Joined as a React js developer at DIATOZ solution.',
          duration:'100',
          year:"05/2019"
        },
        {
          isCompnany:false,
          name:'React js',
          period:'start at 05/2019',
          description:'Deep learning and started a project in React V16.8.',
          duration:'200'
        },
        {
          isCompnany:false,
          name:'Vue js',
          period:'start at 10/2019',
          description:'Had a chance to learn and work in Vue Js project.',
          duration:'400'
        },
        {
          isCompnany: false,
          name: 'UI/UX',
          period:'Start at 02/2020',
          description: 'Start learning design UI/UX to get a clear idea and creative mind about fron-end.',
          duration:'600'
        },
        {
          isCompnany: false,
          name: 'Angular',
          period:'Start at 03/2020',
          description: 'Develope a ERP project using angular 11.',
          duration:'800'
        },
        {
          isCompnany: true,
          name: 'SonicWall',
          period:'Start at 05/2023',
          description: 'Resigned from DIATOZ Solution for career growth and joined at SonicWall as a Vue JS developer.',
          duration:'800'
        },
        {
          isCompnany: true,
          name: 'SonicWall',
          period:'Start at 05/2023',
          description: 'Resigned from DIATOZ Solution for career growth and joined at SonicWall as a Vue JS developer.',
          duration:'800'
        }
      ]
    }
  }
}
</script>

<style scoped>
.is-scrollbar::-webkit-scrollbar{
 display: none;
}

</style>