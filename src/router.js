import { createWebHistory, createRouter } from 'vue-router';

import LandingComponent from './components/LandingComponent';
import ExperienceComponent from './components/ExperienceComponent';
import ProjectComponent from "./components/ProjectComponent";
// import HelloWorld from "./components/HelloWorld";
// import AboutMe from "./components/AboutMe";
import Skills from "./components/MySkills";
import MyProfile from "./components/MyProfile";
const routes = [
  {
    name:"Home",
    path: '/',
    component: LandingComponent,
    meta: {
      enterClass: "animate__animated animate__fadeIn",
      leaveClass: "animate__animated animate__fadeOut"
    }
  },
  {
    name:"Experience",
    path: '/experience', component: ExperienceComponent,
    meta: {
      enterClass: "animate__animated animate__fadeIn",
      leaveClass: "animate__animated animate__fadeOut"
    }
  },
  {
    name:"Project",
    path: '/project', component: ProjectComponent,
    meta: {
      enterClass: "animate__animated animate__fadeIn",
      leaveClass: "animate__animated animate__fadeOut"
    }
  },
  {
    name:"Skills",
    path: '/skills', component: Skills,
    meta: {
      enterClass: "animate__animated animate__fadeIn",
      leaveClass: "animate__animated animate__fadeOut"
    }
  },
  {
    name:"Profile",
    path: '/profile', component: MyProfile,
    meta: {
      enterClass: "animate__animated animate__fadeIn",
      leaveClass: "animate__animated animate__fadeOut"
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router;