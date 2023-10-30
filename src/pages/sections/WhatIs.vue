<template>
  <doc-section>
    <markdown-content :markdown="mdContent"></markdown-content>
  </doc-section>
</template>

<script>
import DocSection from '../../components/DocSection.vue';
import MarkdownContent from "@/components/MarkdownContent.vue";
import mdContent from '@/assets/md/whatis.md';

export default {
  name: 'WhatIs',
  components: {MarkdownContent, DocSection },
  data() {
    return {
      mdContent
    }
  }
}
</script>

<style lang="scss" scoped>
</style>