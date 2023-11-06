<template>
  <doc-section>
    <markdown-content :markdown="mdContent" />
  </doc-section>
</template>

<script>
import DocSection from '@/components/DocSection.vue'
import mdContent from '@/assets/md/monk-cli.md'
import MarkdownContent from "@/components/MarkdownContent.vue";

export default {

  name: 'MonkCli',

  components: {DocSection, MarkdownContent},

  data() {
    return {
      mdContent,
    }
  },

}
</script>