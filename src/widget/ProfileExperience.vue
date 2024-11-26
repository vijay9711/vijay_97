<template>
  <div>
    <div>
      <p class="text-lg font-bold w-full text-left mb-0">Experience</p>
      <div class="border-b mb-4 border-gradient-to-r border-card"></div>
    </div>
    
    <div class=" mt-5 pl-7">
      <ol v-for="(item,index) in experience" :key="index" class="relative border-s border-gray-200 dark:border-gray-700 text-left">
        <li class=" ms-6">
          <span class="absolute xs:top-0 xs:-left-4 lg:top-0 lg:-left-6 xs:w-7 xs:h-7 lg:w-12 lg:h-12 text-white dark:text-gray-dark  rounded-full font-semibold ">
            <img :src="require(`../assets/company/${item.icon}.png`)" alt="icon" class="w-full" />
          </span>
          <div class="mb-1 ml-3" @click="showDescription(index)">
            <h2 class="xs:text-lg lg:text-lg font-semibold text-gray-900 dark:text-white">{{ item.position }}</h2>
            <p class="">{{item.name}} | {{ item.type }}</p>
          <p class="text-gray">{{ item.year }}</p>
          </div>
          <p class="text-base ml-3 xs:text-md lg:text-sm font-normal text-gray-500 dark:text-gray-400 pl-3" >
            <ul class="list-disc">
              <li v-for="(point,i) in item.description" :key="i" class="mb-1">
                {{ point }}
              </li>
             
            </ul>
          </p>
          <p class="font-medium ml-3  pb-7">Technology Used:<span>{{ item.techUSed }}</span></p>
        </li>
      </ol>
      
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      experience:[
          {
            name: "SISA Information Security Pvt. Ltd.",
            type:"Full-time",
            description:[
              "Engineered a comprehensive UI architecture with reusable components and a centralized service layer, reducing development time by 30%.  ",
              "Created a responsive UI wireframe tailored for optimal business performance and effortless client accessibility, prioritizing user-centric design principles. ",
              "Improved service quality, boosting client satisfaction scores by over 40%, while also doubling client acquisition rates post-migration.  ",
              "Developed reusable components strategically to optimize application performance, reducing redundancy and enhancing overall efficiency. ",
              "Developed a dynamic, reusable form component that generates application forms in Angular 15. "
            ],
            techUSed:"TypeScript, Angular, Chart JS, ASP.Net, Material UI, AG Grid, Ant Design, GCP, React Native, Unit test, React JS.",
            year: "Sep 2022 - Jul 2023 | 11 mos",
            place:"Bengaluru, Karnataka, India",
            position:"Senior associate developer",
            icon:"sisa",
            show:false
          },
          {
            name: "SonicWall",
            type:"Full-time",
            description:[
              "Implemented lazy loading in Vue.js to enhance application performance by dynamically loading components and resources as needed, optimizing user experience through efficient resource utilization. ",
              "Implemented role-based security measures in Vue.js web UI development, ensuring access control and data protection based on user roles, thus enhancing application security and user experience. "
            ],
            techUSed:"JavaScript, Vue JS, Node JS, AWS, MySQL, MongoDB.",
            year: "Jun 2022 - Sep 2022 | 4 mos",
            place:"Bengaluru, Karnataka, India",
            position:"Senior Software Development Engineer",
            icon:"sonicwall",
            show:false
          },
      {
            name: "DIATOZ solution",
            type:"Full-time",
            description:[
              "Engineered new features within a critical application using ReactJS, Vue JS, Angular, and NodeJS in heightened client satisfaction and application enhancement. ",
              "I have work experience and a good understanding of Oracle POS, which has equipped me with valuable insights into point-of-sale systems.  ",
              "Successfully developed a Vue JS project and seamlessly integrated FlexMonster, a powerful data visualization tool, to efficiently manage and display datasets exceeding 100,000 records. ",
              "Implemented Pub-Nub, a real-time communication platform in ReactJS application, to facilitate live chat functionality between two customers, enhancing the interactive experience within the application. ",
              "Promoted to Senior Software Development Engineer on June 2020, recognizing continued growth and contributions in that role. ",
              "Served as a Scrum Master, actively engaging with the team members to address their blockers and facilitate a smooth development process, ensuring streamlined task management and timely project deliveries. ",
              "Successfully developed a live chatbot utilizing ReactJS, integrated with Google OAuth for authentication and Dialogflow for NLP (natural language processing), achieving conversational interactions within the application. "
            ],
            techUSed:"JavaScript, TypeScript, React JS, React Native, Vue JS, Angular, Node JS, Redux, Oracle POS, Oracle PL/SQL, Vuex, Unit test, integration Testing, Jenkins, AWS, Google Cloud, Spring Boot.",
            year: "May 2019 - Jun 2022 | 3 yrs 2 mos",
            place:"Bengaluru, Karnataka, India",
            position:"Senior Software Development Engineer",
            icon:"diatoz",
            show:false
          },
          {
            name: "Iexemplar pvt solution",
            type:"Full-time",
            description:["Applied knowledge of JavaScript and Object-Oriented Programming to create successful web pages."],
            techUSed:"ReactJS, Angular",
            year: "Jan 2019 - Mar 2019 | 3 mos",
            place:"Coimbatore Area, India",
            position:"Web Developer",
            icon:"iexemplar",
            show:false
          },
      ]
    }
  },
  methods:{
    showDescription(id){
      // this.experience[id].show = true;
      this.experience.map((item, i)=>{
        item.show = id == i ? true : false;
      })
    }
  }
};
</script>

<style>
</style>