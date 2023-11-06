<template>
  <doc-section>
    <markdown-content :markdown="mdContent" />
  </doc-section>
</template>

<script>
import DocSection from '@/components/DocSection.vue';
import MarkdownContent from "@/components/MarkdownContent.vue";
import {default as mdContent} from '@/assets/md/get-started.md';


export default {

  name: 'GettingStarted',

  components: {DocSection, MarkdownContent},

  data() {
    return {
      mdContent,
    }
  },

};
</script>