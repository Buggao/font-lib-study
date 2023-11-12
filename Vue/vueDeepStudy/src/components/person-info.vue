<template>
  <div class="home-form">
    <select>
      <option v-for="item in props.phoneInfo" :value="item" v-bind:key="item">{{ item }}</option>
    </select>
    <input type="number" name="phone-number"  :value="phoneInfo.phoneNumber" placeholder="请输入电话号码">
    <input type="number" name="post-number" :value="zipCode" placeholder="请输入邮编">
  </div>
</template>

<script>
  props:{
    phoneInfo: Object,
    zipCode: String
  }
</script>

<style>
.home-form{
  display: flex;
  flex-direction:row;
  justify-content: center;
  align-item: center;
}
</style>
