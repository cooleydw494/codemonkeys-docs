<template>
  <div class="app-page">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AppPage',
}
</script>

<style lang="scss" scoped>

.app-page {
  @apply w-full relative px-4 py-12 overflow-y-scroll;
  @apply md:px-8;
  height: calc(100vh - 4rem);
}

</style>