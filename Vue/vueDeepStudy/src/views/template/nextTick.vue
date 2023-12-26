<script setup>
import { ref, nextTick } from 'vue'
const count = ref(0)
const buttonRef = ref(null)
const incream = async _ => {
   count.value++
   console.log('now is before change', document.getElementById('button').textContent)
   await nextTick()
   console.log('now is after change', document.getElementById('button').textContent)
}
let npRes = null
const np = new Promise( (res, rej) => npRes = res)
const promiseThen = _ => {
  console.log('here is promisethen click function')
  npRes('in promiseThen')
}
np.then(res => {
  console.log('np res is running res is', res)
})

function testIterator(){
  console.log('testIterator is running')
  let obj ={ a:'ant', b:'bilibili', c:'cctv', [Symbol.iterator]: function(){}}
  for(const item in obj){
    console.log('item is', item)
    console.log('iterator next', obj.next())
  }
}
testIterator()
</script>

<template>
  <div class="router-page">
    <button @click="incream" id="button" ref="buttonRef">{{count}}</button> 
    <button @click="promiseThen">promsie</button>
  </div> 
</template>
