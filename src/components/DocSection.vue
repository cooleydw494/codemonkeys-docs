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
  @apply w-full max-w-4xl mb-8 pt-4 pb-8 px-8 md:px-12 bg-surface-200 rounded;
  @apply text-surface-800 drop-shadow-xl shadow-xl;
  margin: 0 auto;
}

</style>