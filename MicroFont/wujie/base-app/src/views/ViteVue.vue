<template>
  <h1>vite vue</h1>
 <a> http://localhost:7500/home</a>
  <!--单例模式，name相同则复用一个无界实例，改变url则子应用重新渲染实例到对应路由 -->
  <WujieVue width="100%" height="800px" name="vite" :url="viteUrl" :sync="true"></WujieVue>
</template>

<script>
export default {
  data() {
    return {
      viteUrl: "//localhost:7500/",
    };
  },
};
</script>

<style lang="scss" scoped></style>