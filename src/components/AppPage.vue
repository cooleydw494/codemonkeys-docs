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
  @apply w-full relative px-4 pt-12 overflow-y-scroll;
  @apply lg:w-auto lg:pr-4 lg:pl-64;
  height: calc(100vh - 4rem);
}

</style>