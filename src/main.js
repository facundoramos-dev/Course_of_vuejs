import { createApp } from "vue";
import App from "./App.vue";
// import "../public/css/styles.css"; //trabajo con el post css de tailwind
import "materialize-css/dist/css/materialize.min.css";
import router from "./router";
import storage from "./storage";

createApp(App).use(router).use(storage).mount("#app");
