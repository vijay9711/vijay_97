<template>
  <div class="bg-white h-[95vh] w-screen dark:bg-gray-dark flex items-center px-10">
    <div class="w-full h-full z-0 lg:flex flex align-middle p-20">
      <!-- <img class="m-auto lg:dark:opacity-20 md:opacity-1"
            src="../assets/aboutme.svg" alt="aboutme"> -->
      <ul class="align-middle sticky w-5/12">
        <li  
            ref="card"
            data-aos="flip-up"
            :data-aos-delay="item.duration"
            data-aos-easing="linear"
            v-for="(item, index) of myList" :Key="index" 
            :class="`${selectedItem.id == item.id ? '!bg-none border !bg-opacity-5 card': 'card'}`"
            @click="selectItem(item)">
          {{ item.description }}
        </li>
      </ul>
      <div class="bg-gray bg-opacity-40 w-full flex rounded-lg m-5">
        <div class="border-1 border-black" data-aos="fade-in"
            data-aos-easing="linear"
            data-aos-offset="0">
            {{ this.selectedItem.explain }}
        </div>
      </div>
    </div>
      
  </div>
</template>

<script>
// import { gsap } from "gsap";
// import FlipCard from '@/widget/FlipCard.vue';

export default {
  methods:{
    selectItem(item){
      console.log(item);
      this.selectedItem = item;
    }
  },  
  components:{
    // FlipCard
  },
  mounted(){
    this.selectedItem = this.myList[0];
  },  
  data(){
    return{
      selectedItem:"",
      myList:[
        {
          id:0,
          top:"150px",
          left:"250px",
          right:null,
          duration:100,
          description:"Full-Stack Web Developer",
          explain:"A full-stack developer with 5+ year of experince in multiple framworks like React js, Angular, Vue Js, Node JS, and SpringBoot. Additionally have knowlegde in AWS, GCP, GitHub, Jenkins.",
          items:[
            {
              icon:"",
              description:"",
              title:""
            }
          ]
        },
        // {
        //   top:"300px",
        //   left:"350px",
        //   right:"",
        //   duration:400,
        //   description:"My expertise spans frontend and backend development, with a strong focus on Angular, ReactJS, VueJS, Spring Boot, and NodeJS."
        // },
        {
          id:1,
          top:"470px",
          left:"",
          right:"50px",
          duration:300,
          description:"A Scrum Master",
          explain:"I have experience leading teams, facilitating Agile processes, and ensuring smooth project deliveries"
        },
        {
          id:2,
          top:"270px",
          left:"",
          right:"280px",
          duration:500,
          description:"Mentor",
          explain:"I enjoy mentoring others as it helps me learn and grow as well."
        },
        {
          id:3,
          top:"155px",
          left:"",
          right:"150px",
          duration:700,
          description:"self-taught",
          explain:"self-taught, quick learner eager to work with new technologies."
        }
      ]
    }
  },
};
</script>

<style scoped>
.card{
  @apply dark:text-white text-white w-full font-semibold bg-gray-dark dark:bg-gray dark:bg-opacity-70 hover:bg-opacity-80 transition-all duration-75 border p-5 rounded-md m-5 flex-wrap max-w-md dark:border-white border-none
}
</style>