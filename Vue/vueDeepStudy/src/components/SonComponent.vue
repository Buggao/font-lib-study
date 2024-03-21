<script setup>
import {ref} from 'vue'
defineProps({
  msg: String,
})
const emit = defineEmits(['whoAmI'])

const status = ref('I am not')
const sayingToApp = (msg) => {
  status.value = "I am said."
  emit('whoAmI', 'I am son component')
}
</script>

<template>
  <h1>Are you said ?:
    {{ status }} </h1>
  <button @click="sayingToApp">Say who am I</button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
