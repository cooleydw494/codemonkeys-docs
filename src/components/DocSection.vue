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
  @apply mb-8 p-8;

  .title {
      @apply text-2xl mb-4;
  }

  .introduction {
      @apply mb-8;
  }

  .sub-section {
      @apply mb-4 p-4;

      code {
          @apply bg-quinary text-tertiary;
      }
  }
}

</style>