<template>
  <div class="doc-section">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'DocSection',
}
</script>

<style lang="scss" scoped>

.doc-section {
  @apply w-full max-w-4xl pt-4 pb-4 px-4 md:px-8 bg-surface-200 rounded;
  @apply text-xs md:text-sm font-medium text-surface-800 drop-shadow-xl shadow-inner;
}

</style>