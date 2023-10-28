<template>
  <div class="md-content" v-html="parsedMarkdown"></div>
</template>

<script>
import MarkdownIt from 'markdown-it';

export default {
  props: {
    markdown: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      parsedMarkdown: "",
    };
  },
  mounted() {
    const md = new MarkdownIt();
    this.parsedMarkdown = md.render(this.markdown);
  }
}
</script>