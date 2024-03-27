<script setup>
import {ref} from 'vue'
defineProps({
  msg: String,
})
const emit = defineEmits(['changeData'])

const emitEvent = type => {
  emit('changeData',type)
}
</script>

<template>
  <h1>Are you said ?:
    {{ status }} </h1>
  <button @click="emitEvent('add')">add</button>
  <button @click="emitEvent('sub')">sub</button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
