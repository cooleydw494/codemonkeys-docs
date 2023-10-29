<template>
  <doc-section>
    <markdown-content :markdown="mdContent"></markdown-content>
  </doc-section>
</template>

<script>
import DocSection from "@/components/DocSection.vue";
import MarkdownContent from "@/components/MarkdownContent.vue";
import {default as mdContent} from '@/assets/md/automations.md';

export default {
  name: 'AutomationsPage',
  components: {MarkdownContent, DocSection},
  data() {
    return {
      mdContent,
    }
  },
}
</script>

<style scoped>
</style>