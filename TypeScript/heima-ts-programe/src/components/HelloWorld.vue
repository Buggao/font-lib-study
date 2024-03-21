<script setup lang="ts">
type PropsType = {
  msg?: string
}
const props = defineProps<PropsType>()
const {msg = 'null'} = props
console.log(props.msg)
</script>

<template>
  <h3> HelloWorld.vue</h3>
  <p>The message from App.vue is {{ msg }}</p> 
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
