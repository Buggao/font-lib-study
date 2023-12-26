<template>
  <div class="fancy-item">
    <h2>
      {{ props.componentName.value }}
    </h2>
    <div>Mouse position is at: {{ x }}, {{ y }}</div>
    <div v-bind="$attrs">
      {{ props.componentContent }}
      <span>childrenSelect</span>
      <!-- {{ childrenSelect }} -->
      <span>attribute: {{ $attrs }}</span>
    </div>
    <div class="choose-box">
      <span v-for="(item,index) in ['S', 'M', 'L']" :class="['size-box', activeIndex == index ? 'active': '']" @click="checkSize(index, $event)">{{item}}</span>
    </div>
    <button @click="$emit('selectSize', activeSize)">submit size</button>
  </div>
</template>

<script setup>
  import {ref} from 'vue'
  import { useMouse } from '../utils/mouse'
  defineOptions({
    inheritAttrs: false
  })
  const props = defineProps(
    {
      componentName: Object,
      componentContent: {
        type: [Number, String]  
      },
      selectSize: String,
      modelValue:Object
    }
  )
  const emits = defineEmits(['selectSize', 'update:modelValue'])
  let activeSize = void(0)
  let activeIndex = ref(-1) 
  function checkSize(index, event){
    console.log('selse is running', event.target.innerText)
    activeSize = event.target.innerText
    activeIndex.value = index
  }
  const {x, y} = useMouse()
</script>

<style>
  .fancy-item{
    width: 400px;
    padding: 20px;
    border:1px solide #ccc;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
  }
  .header{
    padding-left: 10px;
    border:1px solide #ccc;
    align-self:flex-start;
    height: 60px;
  }
  .content{
    height: 60%;
  }
  .footer{
    padding-right:10px;
    border:1px solide #ccc;
    height:60px;
    align-self: flex-end;
  }
</style>