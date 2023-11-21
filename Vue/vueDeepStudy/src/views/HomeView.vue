<template>
  <div class="home-page">
    <div v-for="item in 3">
      <span>{{author.name }}</span>
      <span> has publish book? </span>
      <span>{{ hasPublishBook}}</span>
    </div>
    <div>
      <span>now has </span>
      <span>{{bookNumbers}}</span>
      <span> books.</span>
    </div>
    <dir>book list:</dir>
    <div v-for="item in author.books">
      <span>{{ item }}</span>
    </div> 
    <div class="add-new-book">
      <input type="text" v-model="newBookName" placeholder="new book name">
      <button @click="addNewBook">add new book</button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch} from 'vue'

const newBookName = ref(void(0))
const bookNumbers = ref(void(0))
const author = reactive(  
  {
    name: 'Nini Gao',
    books: [
      '假如给我散甜光鸣',
      '妮妮与海',
      '床边的小豆豆',
      '死了✌',
      '在太阳底下呼喊'
    ]
  }
)

function addNewBook(){
  author.books.push(newBookName.value)
  newBookName.value = void(0)
} 
const hasPublishBook = computed( () => {
  console.log('computed is running')
  return author.books.length > 0 ? 'yes': 'no'
})
watch(author, () => {
  bookNumbers.value = author.books.length
},{deep:true, immediate:true})

watch(newBookName, () => {
  console.log('newBookName')
})
</script>

<style>
</style>