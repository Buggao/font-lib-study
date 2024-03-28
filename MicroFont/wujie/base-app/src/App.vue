<template>
    <main class="main-app">
        <nav>
            <ul>
                <router-link to="/home">回首页 </router-link>
                <router-link to="/vite">vite vue</router-link>
            </ul>
        </nav>
        <section class="main">
            <router-view></router-view>
        </section>
    </main>
</template>

<style lang="scss" scoped>
.main-app{
    height: 100vh;
    display: grid;
    grid-template-areas: 
        'nav nav'
        'main main';
    grid-template-columns: 1fr;
    grid-template-rows: 8% 1fr;
    nav{
        grid-area: nav;
        background-color: #fce38a;
        ul {
            display: flex;
            gap: 10px;
            >li {
                color: #aaa;
                font-size: 18px;
                font-weight: 400;
                cursor: pointer;
                &:hover {
                    font-size: 1.2em;
                  color: #444;
                }
              }
        }
    }
    section.main {
        grid-area: main;
        background-color: #95e1d3;
        #subapp-viewport {
            height: 100%;
        }
    }
}
</style>
