<template>
  <div class="router-page">
    <ul>
      <li v-for="(fruit, index) in listData">
        {{ index }} - {{ fruit.fruit}}: {{ fruit.score }}
        <span v-for="(item, index) of fruit.varieties">{{`${index+1}.${item}`}}</span>
      </li>
    </ul>
    <ul style="margin: 20px;">
      <ol v-for="(value, key, index) of listObj">
        {{index}} - {{ key }}:{{ value }}
      </ol>
    </ul>
  </div>
</template>

<script setup>
  let listData = [
    {fruit: 'apple', score: '80', varieties: ['阿苏克、', '红富士、', '蛇果、', '金冠']},
    {fruit: 'banana', score: '88'},
    {fruit: 'grape', score: '85'},
  ]
  let listObj = {
    methods: 'v-for',
    useage: 'list rendering',
    useMethods: 'v-for:"item in items"'
  }
</script>