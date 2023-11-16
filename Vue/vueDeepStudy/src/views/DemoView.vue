<template>
    <div class="demopage">
        <nav class="nav-bar">
            <RouterLink to="/demo/class">类</RouterLink>
            <RouterLink to="/demo/style">样式</RouterLink>
            <RouterLink to="/demo/list">条件渲染</RouterLink>
        </nav>
        <RouterView/>
    </div>
</template>
  
<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
  
<style>
.nav-bar{
    width: 30%;
    display: flex;
    flex-direction: column;
}
.demopage{
    display: flex;
}
.home-page {
    display: flex;
    padding: 20px 0;
    align-items: center;
    flex-direction: column;
} 
.gold-text {
    font-weight: 700;
    color: #b9990b;
}
.status-block{
    width: 120px;
    height: 30px;
    margin-top: 15px;
    text-align: center;
}
</style>