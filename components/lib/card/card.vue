<template>
  <div>
    <p class="title">card</p>
    <img src="../../img/kv.png"
         alt=""
         class="kv">
    <div class="content">
      <p class="desc">{{desc}}</p>
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