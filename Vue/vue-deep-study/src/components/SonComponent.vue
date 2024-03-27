<script setup>
const status = '123'
defineProps({
  listData:{
    type: Array,
    default: ()=>{
      return []
    }
  }
})
const emit = defineEmits(['changeData'])

const emitEvent = (type, index)=> {
  console.log(type, index)
  if(type === 'add'){
    emit('changeData', 'add',index)
  }else if(type === 'sub'){
    emit('changeData', 'sub',index)
  }
}


</script>

<template>
  <h1>Are you said ?:
    {{ status }} </h1>
  <ul>
    <li v-for="(item,index) in listData">
      
      <input type="text" v-model="item.number">
      <button @click="emitEvent('add',index)">add</button>
      <button @click="emitEvent('sub',index)">sub</button>
    </li>
  </ul>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
