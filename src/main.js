import { createApp } from "vue";
import App from "./App.vue";
// import "../public/css/styles.css"; //trabajo con el post css de tailwind
import "materialize-css/dist/css/materialize.min.css"
import router from "./router";

createApp(App).use(router).mount("#app");
