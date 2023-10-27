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

<style lang="scss" scoped>

.section {
  @apply w-full max-w-5xl mb-8 p-8 bg-surface-200 rounded-lg;
  @apply text-surface-700 drop-shadow-xl;
  margin: 0 auto;

  .title {
      @apply text-2xl mb-4;
  }

  .introduction {
      @apply mb-8 text-surface-800;
  }
}

</style>