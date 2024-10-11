import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import router from "./router";
// import VueTyperPlugin from 'vue-typer'


const app = createApp(App);
app.use(router);
// app.use(VueTyperPlugin);
app.use(AOS.init());
app.mount('#app');
