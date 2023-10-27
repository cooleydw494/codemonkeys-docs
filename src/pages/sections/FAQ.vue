<template>
  <doc-section>
    <template #title>Overview</template>
    <template #introduction>
      <p>This section provides answers to Frequently Asked Questions (FAQs) about CodeMonkeys.</p>
    </template>
    <sub-section>
      <template #title>FAQ</template>
      <template #content>
        <p><strong>Q1</strong>: [Question Here]</p>
        <p><strong>A1</strong>: [Answer Here]</p>
        <p><strong>Q2</strong>: [Question Here]</p>
        <p><strong>A2</strong>: [Answer Here]</p>
        <p>...Continue this pattern for all FAQs...</p>
      </template>
    </sub-section>
  </doc-section>
</template>

<script>
import SubSection from "@/components/SubSection.vue";
import DocSection from "@/components/DocSection.vue";

export default {
  name: 'FAQ',
  components: {DocSection, SubSection},
}
</script>

<style scoped>
</style>