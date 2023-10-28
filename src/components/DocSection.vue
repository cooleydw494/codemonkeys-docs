<template>
  <div class="section">
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
  @apply w-full max-w-5xl mb-8 py-4 px-8 md:px-12 bg-surface-200 rounded-lg;
  @apply text-surface-700 drop-shadow-xl;
  margin: 0 auto;
}

</style>