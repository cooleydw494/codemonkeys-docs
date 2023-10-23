<template>
  <section>
    <sub-section>
    <template #title><h2>Overview</h2></template>
    <template #content><p>This section provides answers to Frequently Asked Questions (FAQs) about CodeMonkeys.</p></template>
    </sub-section>
    <sub-section>
    <template #title><h2>FAQ</h2></template>
    <template #content>
      <p><strong>Q1</strong>: [Question Here]</p>
      <p><strong>A1</strong>: [Answer Here]</p>
      <p><strong>Q2</strong>: [Question Here]</p>
      <p><strong>A2</strong>: [Answer Here]</p>
      <p>...Continue this pattern for all FAQs...</p>
    </template>
    </sub-section>
  </section>
</template>

<script>
export default {
  name: 'FAQ',
}
</script>

<style scoped>
h2 {
  font-family: var(--font-family-heading);
  color: var(--color-primary);
}
p {
  font-family: var(--font-family-body);
  @apply text-secondary;
}
</style>