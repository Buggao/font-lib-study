<script setup lang="ts">
import { ref, watch, reactive } from 'vue'

const question = ref('')
const answer = ref('Questions usually contain a question mark. ;-)')
const loading = ref(false)

// 可以直接侦听一个 ref
watch(question, async (newQuestion) => {
  if (newQuestion.includes('?')) {
    loading.value = true
    answer.value = 'Thinking...'
    try {
      const res = await fetch('https://yesno.wtf/api')
      answer.value = (await res.json()).answer
    } catch (error) {
      answer.value = 'Error! Could not reach the API. ' + error
    } finally {
      loading.value = false
    }
  }
})
// const name = ref('ton')
const array = ref([1,2,3,4])
watch(array, (newArray, oldArray) => {
  console.log('new array is', newArray,'old Array is', oldArray)
})

  const demoObj = reactive({name:'Ton', age:23})
  watch(() => demoObj.name, (newValue) => {
    console.log('new demoObj.name is', newValue)
  },{immediate: true })




  function pushArray(){
    array.value.push(7)
  }
  function changeName(){
    // name.value = 'Gao Ton'
  }
</script>

<template>
  <p>
    Ask a yes/no question:
    <input v-model="question" :disabled="loading" />
  </p>
  <p>{{ answer }}</p>
  <button @click="pushArray">push array</button>
  <button @click="changeName">change name</button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
