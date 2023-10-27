<template>
  <div class="page">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AppPage',
}
</script>

<style lang="scss" scoped>

.page {
  @apply w-full relative px-2 py-12 overflow-y-scroll;
  @apply md:px-8;
  height: calc(100vh);
}

</style>