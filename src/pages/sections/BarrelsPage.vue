<template>
  <doc-section>
    <markdown-content :markdown="mdContent"></markdown-content>
  </doc-section>
</template>

<script>
import DocSection from '@/components/DocSection.vue'
import MarkdownContent from "@/components/MarkdownContent.vue";
import mdContent from '@/assets/md/barrels.md';

export default {
  name: 'BarrelsPage',
  components: {
    MarkdownContent,
    DocSection
  },
  data() {
    return {
      mdContent,
    }
  },
}
</script>

<style scoped>
</style>