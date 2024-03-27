import { createApp } from "vue";
import { createRouter, createWebHistory } from 'vue-router';
import {  registerMicroApps, addGlobalUncaughtErrorHandler, setDefaultMountApp,start} from "qiankun";
import App from "./App.vue";
//引入全局scss文件
import "../index.scss";

const mainApp = createApp(App);
mainApp.mount("#main-app");

const subApps = [
  {
    name: 'subVue',
    // entry: process.env.NODE_ENV.VUE_APP_SUB_VUE,
    entry:'//localhost:5173',
    container: '#subapp-viewport', // 子应用挂载的div
    activeRule: '/subVue'
  }
]
//注测微应用
registerMicroApps(subApps, {
  beforeLoad: (app) => {
    console.log("before load app.name====>>>>>", app.name);
  },
  beforeMount: [
    (app) => {
      console.log("[LifeCycle] before mount %c%s", "color: green;", app.name);
    },
  ],
  afterMount: [
    (app) => {
      console.log("[LifeCycle] after mount %c%s", "color: green;", app.name);
    },
  ],
  afterUnmount: [
    (app) => {
      console.log("[LifeCycle] after unmount %c%s", "color: green;", app.name);
    },
  ],
});

/**
 * 添加全局的未捕获异常处理器
 */
addGlobalUncaughtErrorHandler((event) => {
  console.error(event);
  const { message: msg } = event;
  // 加载失败时提示
  if (msg && msg.includes("died in status LOADING_SOURCE_CODE")) {
    message.error("微应用加载失败，请检查应用是否可运行");
  }
})

/**
 * Step3 设置默认进入的子应用
 */
setDefaultMountApp('/subVue');

start();
