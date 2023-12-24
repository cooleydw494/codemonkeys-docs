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
  @apply drop-shadow-xl shadow-inner;
}

</style>