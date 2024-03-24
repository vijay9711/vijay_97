import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Router from "./router";

createApp(App).use(Router).use(AOS.init()).mount('#app');
