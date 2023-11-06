<template>
  <doc-section>
    <markdown-content :markdown="mdContent"/>
  </doc-section>
</template>

<script>
import DocSection from "@/components/DocSection.vue";
import MarkdownContent from "@/components/MarkdownContent.vue";
import mdContent from "@/assets/md/monkeys-advanced.md";

export default {

  name: 'MonkeysAdvanced',

  components: {DocSection, MarkdownContent},

  data() {
    return {
      mdContent,
    }
  },

}
</script>