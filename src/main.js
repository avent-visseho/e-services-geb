import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueFeather from 'vue-feather';
import 'vue3-toastify/dist/index.css';
import { toast } from 'vue3-toastify';
// import "./assets/main.css";

const app = createApp(App);


app.use(router);

app.component(VueFeather.name, VueFeather);

app.mount("#app");
