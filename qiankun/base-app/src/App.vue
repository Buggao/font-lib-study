<script setup>
const testFunction = () => {
    console.log('滚')
}

</script>

<template>
    <div class="main-app">
        <nav>nav</nav>
        <aside>aside</aside>
        <main>main
            <div id="sub-app"></div>
        </main>

    </div>
</template>

<style lang="scss" scoped>
.main-app{
    height: 100vh;
    display: grid;
    grid-template-areas: 
        'nav nav'
        'aside main';
    grid-template-columns: 12% 1fr;
    grid-template-rows: 8% 1fr;
    nav{
        grid-area: nav;
        background-color: #fce38a;
    }
    aside {
        grid-area: aside;
        background-color: #eaffd0;
    }
    main {
        grid-area: main;
        background-color: #95e1d3;
    }
}
</style>
