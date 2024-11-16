<template>
  <div class="w-[80%] h-[90%]  m-auto rounded-3xl dark:text-white text-gray-dark overflow-auto
  ">
    <div class="grid lg:grid-cols-4 lg:grid-rows-1 xs:grid-rows-3 xs:grid-col-1">
      <div class="lg:col-span-1 lg:row-span-1 xs:row-span-2 h-full">
        <div class="grid m-3 ">
          <div class=" p-4 rounded-xl">
            <div class="w-64 h-64 rounded-full card-morphin m-auto">pic</div>
          </div>
          <div class="card-morphin  rounded-xl p-4 mt-3">
            <div class="">
              <ProfileExperienceVue/>
            </div>
            <div class="mt-3">
              <ProfileEducationVue/>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:col-span-3 card-morphin xs:row-span-1 lg:my-3 lg:mr-3 xs:m-3  rounded-xl ">
        details
      </div>
    </div>
  </div>
</template>

<script>
import ProfileExperienceVue from '@/widget/ProfileExperience.vue';
import ProfileEducationVue from '@/widget/ProfileEducation.vue';
// import { gsap } from 'gsap';
export default {
  components:{
    ProfileExperienceVue,
    ProfileEducationVue
  },
  mounted(){
    this.initiateCard()
  },
  methods:{
    initiateCard(){
      // gsap.fromTo("")
    }
  }

}
</script>

<style scoped>

</style>