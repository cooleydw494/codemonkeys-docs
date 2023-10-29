<template>
  <doc-section>
    <markdown-content :markdown="mdContent"></markdown-content>
  </doc-section>
</template>

<script>
import DocSection from '@/components/DocSection.vue';
import MarkdownContent from "@/components/MarkdownContent.vue";
import {default as mdContent} from '@/assets/md/getting-started.md';


export default {
  name: 'GettingStarted',
  components: {
    MarkdownContent,
    DocSection
  },
  data() {
    return {
      mdContent,
    }
  },
};
</script>

<style lang="scss" scoped>
</style>