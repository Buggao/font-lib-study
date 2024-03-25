<script setup lang="ts">
</script>

<template>
  <nav>
    <ul>
      <li>
        <a class="read-the-docs">推荐</a>
      </li>
      <li>
        <a class="read-the-docs">HTML</a>
      </li>
      <li>
        <a class="read-the-docs">开发者资讯</a>
      </li>
      <li>
        <a class="read-the-docs">Css</a>
      </li>
      <li>
        <a class="read-the-docs">TypeScript</a>
      </li>
      <li>
        <a class="read-the-docs">JavaScript</a>
      </li>
      <li>
        <a class="read-the-docs">数据库</a>
      </li>
      <li>
        <a class="read-the-docs">Rust</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  max-width: 100vw;
}
nav ul{
  overflow-x:scroll;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
}
ul li {
  flex-shrink: 0;
  margin: 0 1rem;
}
.read-the-docs {
  color: #888;
}
.read-the-docs:hover {
  color: #535bf2;
  font-weight: 800;
  filter: drop-shadow(0 0 2em #646cffaa);
}
</style>
