<template>
  <doc-section>
    <markdown-content :markdown="mdContent"></markdown-content>
  </doc-section>
</template>

<script>
import DocSection from '@/components/DocSection.vue'
import mdContent from '@/assets/md/monk-cli.md'
import MarkdownContent from "@/components/MarkdownContent.vue";

export default {
  name: 'MonkCli',
  components: {MarkdownContent, DocSection },
  data() {
    return {
      mdContent,
    }
  }
}
</script>

<style scoped>
</style>