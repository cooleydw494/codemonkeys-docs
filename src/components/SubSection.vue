<template>
  <div class="sub-section">
    <h2>
      <slot name="title"></slot>
    </h2>
    <div>
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubSection',
}
</script>

<style lang="scss" scoped>

.sub-section {
  @apply mb-4;

  code {
    @apply bg-surface-100 text-tertiary;
  }
}

</style>