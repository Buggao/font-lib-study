
<script>
  import FancyItem from '.././components/fancyItem.vue'
</script>

<template>
  <h1>about view</h1>
  <FancyItem>
    <template v-slot:header>
      <p>header</p>
      <div> what fuck</div>
    </template>
    <p>default content</p>
    <template v-slot:footer>
      <p>footer</p>
      <div> what fuck</div>
    </template>
  </FancyItem>
</template>
