
<script>
  import FancyItem from '../components/fancy-item.vue'
</script>

<template>
  <div>
    <h1>about view</h1>
    <FancyItem>
      <template v-slot:header>
        <p>header</p>
        <div> what fuck</div>
      </template>
      <p>default content</p>
      <template slot:footer>
        <p>footer</p>
        <div> what fuck</div>
      </template>
    </FancyItem>
  </div>
</template>
