<template>
  <div class="section">
    <h1 class="title"><slot name="title"></slot></h1>
    <p class="introduction"><slot name="introduction"></slot></p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'DocSection',
}
</script>

<style scoped>
</style>