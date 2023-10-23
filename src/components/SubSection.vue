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

<style scoped>
.sub-section {
  padding: 1em;
  border-bottom: 1px solid var(--color-secondary);
}

.sub-section:last-child {
  border-bottom: none;
}
</style>