<template>
  <div class="main">
    <p class="title">card</p>
    <img src="../public/logo.png"
         alt="">
    <div class="content">
      <p class="desc">test</p>
      <slot name='footer'></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'mcard',
  props: {
    desc: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang='scss'>
@import "./card.scss";
.main {
  width: 200px;
  height: 200px;
  background: skyblue;
}
</style>