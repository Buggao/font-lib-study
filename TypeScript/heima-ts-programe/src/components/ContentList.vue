<script setup lang="ts">
import ArticleItem from './ArticleItem.vue';
const items = [{id:3392},{id:31392},{id:33392},{id:334592}]
</script>

<template>
    <main>
        <article-item v-for="item in items" :key="item.id" :item="item" />
    </main>
</template>

<style scoped>
    main {
        
        padding: 1em;
    }
</style>