import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import router from "./router";
// import Particles from "particles.vue";
// import Particles from "vue3-particles";
import {Particles} from "tsparticles";

const app = createApp(App);
app.use(router);
app.use(Particles);
// app.use(VueTyperPlugin);
app.use(AOS.init());
// app.use(Particles);
app.mount('#app');

