import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
//引入全局scss文件
import "../index.scss";

const mainApp = createApp(App);
mainApp.use(router).mount("#main-app");

