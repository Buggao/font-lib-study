<script setup lang="ts">
type PropsType = {
  msg?: string
}
const props = defineProps<PropsType>()
const {msg = 'null'} = props

const emit = defineEmits(['sayMyName'])
console.log(props.msg)
</script>

<template>
  <h3> HelloWorld.vue</h3>
  <p>The message from App.vue is {{ msg }}</p> 
  <button @click="$emit(sayMyName, 'hello App.vue, I am HelloWorld.vue')">send message to App.vue</button>  
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
