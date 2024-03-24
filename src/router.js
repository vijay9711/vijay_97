import { createMemoryHistory, createRouter } from 'vue-router';

import LandingComponent from './components/LandingComponent';
import ExperienceComponent from './components/ExperienceComponent';
import ProjectComponent from "./components/ProjectComponent";

const routes = [
  {
    path: '/',
    component: LandingComponent,
    meta: {
      enterClass: "animate__animated animate__fadeInLeft",
      leaveClass: "animate__animated animate__fadeOutRight"
    }
  },
  {
    path: '/experience', component: ExperienceComponent,
    meta: {
      enterClass: "animate__animated animate__fadeInRight",
      leaveClass: "animate__animated animate__fadeOutLeft"
    }
  },
  {
    path: '/project', component: ProjectComponent,
    meta: {
      enterClass: "animate__animated animate__fadeInLeft",
      leaveClass: "animate__animated animate__fadeOutRight"
    }
  }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
export default router;