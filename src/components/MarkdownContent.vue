<template>
  <div class="md-content" v-html="parsedMarkdown"></div>
</template>

<script>
import MarkdownIt from 'markdown-it';
import prism from 'markdown-it-prism';
import markdownItTocDoneRight from "markdown-it-toc-done-right";
import markdownItAnchor from "markdown-it-anchor";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-python";
import "prismjs/plugins/toolbar/prism-toolbar";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard";

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
    const md = new MarkdownIt()
        .use(prism, {
          highlightInlineCode: true,
          plugins: ['toolbar', 'copy-to-clipboard'],
        })
        .use(markdownItAnchor, {permalink: false})
        .use(markdownItTocDoneRight, { format: this.formatToc, level: 2 });

    this.parsedMarkdown = md.render(this.markdown);
  },
  methods: {
    formatToc(x, htmlencode) {
      return `<span>${htmlencode(x)}</span>`;
    }
  }
}
</script>