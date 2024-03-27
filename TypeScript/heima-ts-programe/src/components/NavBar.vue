<script setup lang="ts">
import useStore from '../store'

const { channels } = useStore()
channels.getChannel()
</script>

<template>
  <nav>
    <ul>
      <li 
        v-for="item in channels.channelList" 
        :key="item.id"
        @click="channels.setActive(item.id)">
        <a class="read-the-docs" :class="{active: item.id == channels.active}">{{item.name}}</a>
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
  flex-basis: content;
  flex-shrink: 0;
  margin: 0 1rem;
}
.read-the-docs {
  color: #888;
}
.active {
  color: #535bf2;
  font-weight: 800;
  filter: drop-shadow(0 0 2em #646cffaa);
}
</style>
