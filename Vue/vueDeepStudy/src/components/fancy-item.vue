<template>
  <div class="fancy-item">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="content">
      <slot/>
    </div>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style>
  .fancy-item{
    width: 400px;
    height: 300px;
    border:1px solide #ccc;
    display: flex;
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
    align-slef: flex-end;
  }
</style>