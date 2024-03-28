import { createApp } from "vue";
import router from "./router  ";
import App from "./App.vue";
//引入全局scss文件
import "../index.scss";

import WujieVue from "wujie-vue3";
import { startApp } from 'wujie'
const { setupApp, preloadApp } = WujieVue;
import credentialsFetch from "./fetch";
import lifecycles from "./lifecycle";

console.log(WujieVue)
const mainApp = createApp(App);
mainApp.use(WujieVue)
mainApp.use(router).mount("#main-app");

//无界相关配置
const props = {
  jump: (name) => {
    router.push({ name });
  },
};
const degrade =
  window.localStorage.getItem("degrade") === "true" ||
  !window.Proxy ||
  !window.CustomElementRegistry;
setupApp({
  name: "vite",
  url: "//localhost:7500/",
  attrs: {},
  exec: true,
  props,
  fetch: credentialsFetch,
  degrade,
  ...lifecycles,
});

preloadApp({
  name: "vite",
});
startApp({ name: 'vite'});
