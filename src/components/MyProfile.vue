<template>
  <div class="lg:w-[70%] xs:w-[90%] h-[90%]  m-auto rounded-3xl dark:text-white text-gray-dark
  ">
    <div class="grid lg:grid-cols-4 lg:grid-rows-1 xs:grid-rows-3 xs:grid-col-1 h-full">
      <div class="lg:col-span-1 lg:row-span-1 xs:row-span-2 h-full relative">
        <div class="grid m-3">
          <div class="p-4 rounded-xl inline relative">
            <div class="w-64 h-64 rounded-full card-morphin m-auto">pic</div>
            <!-- <span v-for="(contact,index) in contactMe" :key="index" :class="`absolute ${contact.position}`" >
              <img :src="require(`../assets/${contact.icon}.png`)" alt="icon" class="w-10" />
            </span> -->
          </div>
          <div class="card-morphin rounded-xl p-4 mt-3 inline h-full">
            <div class="">
              <ProfileSkills/>
            </div>
            <div class="mt-5">
              <ProfileEducationVue/>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:col-span-3 card-morphin xs:row-span-1 lg:my-3 lg:mr-3 xs:m-3  rounded-xl p-4 h-full">
        <!-- details -->
        <div class="overflow-auto relative h-full is-scrollbar ">
          <div class="">
            <p class="text-lg font-bold w-full text-left mb-0">About</p>
            <div class="border-b mb-4 border-gradient-to-r border-card"></div>
            <div class="text-left text-sm">{{ aboutMe }}</div>
          </div>
          <div class="mt-5">
            <ProfileExperience/>
          </div>
        </div>
        <div>

        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import ProfileSkills from '@/widget/ProfileSkills.vue';
import ProfileEducationVue from '@/widget/ProfileEducation.vue';
import ProfileExperience from '@/widget/ProfileExperience.vue';
// import { gsap } from 'gsap';
export default {
  data(){
    return{
      aboutMe: "I’m a Full-Stack Web Developer with 5+ years of experience in Angular, ReactJS, and VueJS, specializing in user-centric web applications. At SISA, I led role-based management and UI refactoring, enhancing performance and accessibility. My background includes UI optimization, real-time communication, and data visualization, with Agile leadership expertise.",
      contactMe:[
        {
          platform:"Instagram",
          icon:"insta",
          position:"top-[4rem] left-0"
        },
        {
          platform:"FaceBook",
          icon:"facebook",
          position:"top-[8rem] -left-3"
        },
        {
          platform:"Github",
          icon:"github",
          position:"top-[12rem] left-1"
        },
        {
          platform:"Linkedin",
          icon:"linkedin",
          position:"top-[4rem] right-0"
        },
        {
          platform:"what's app",
          icon:"whatsapp",
          position:"top-[8rem] -right-3 "
        },
        {
          platform:"mail",
          icon:"mail",
          position:"top-[12rem] right-0 "
        }
      ]
    }
  },
  components:{
    ProfileSkills,
    ProfileEducationVue,
    ProfileExperience
  },
  mounted(){
    this.initiateCard()
  },
  methods:{
    initiateCard(){
      // gsap.fromTo("")
    },
    // from the docs
    getImageUrl(name) {
      return new URL(`../assets/${name}.png`, import.meta.url).href
    }
  }

}
</script>

<style scoped>
.is-scrollbar::-webkit-scrollbar {
  display: none;
}
.line-width {
  width: -webkit-fill-available;
}

</style>