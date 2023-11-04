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
  @apply w-full max-w-4xl mb-8 pt-4 pb-8 px-4 md:px-12 bg-surface-200 rounded;
  @apply text-xs md:text-sm font-medium text-surface-800 drop-shadow-xl shadow-inner;
  margin: 0 auto;
  @apply xl:mr-0 xl:w-9/12 2xl:w-full 2xl:mr-32 3xl:mx-auto;
}

</style>