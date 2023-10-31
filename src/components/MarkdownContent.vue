<template>
  <div class="md-content"
       v-if="parsedMarkdown"
       v-html="parsedMarkdown"></div>
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
      parsedMarkdown: null,
    };
  },
  mounted() {
    this.parseMarkdown();
  },
  methods: {
    parseMarkdown() {
      const md = new MarkdownIt()
          .use(prism, {
            highlightInlineCode: true,
            plugins: ['toolbar', 'copy-to-clipboard'],
          })
          .use(markdownItAnchor, {permalink: false})
          .use(markdownItTocDoneRight, {format: this.formatToc, level: 2});

      this.parsedMarkdown = md.render(this.markdown);
    },
    formatToc(x, htmlencode) {
      return `<span>${htmlencode(x)}</span>`;
    },
  },
}
</script>

<style lang="scss">

.md-content {

  ul, ol {
    @apply py-1 mt-4 list-disc list-inside bg-surface-300 bg-opacity-90 rounded-lg text-surface-800 font-normal text-sm;

    li {
      @apply ml-4 my-3;
    }

    ul, ol {
      @apply py-0 mt-0 bg-transparent;

      li {
        @apply ml-8;
        list-style: circle;
      }
    }
  }

  .table-of-contents {
    ul, ol {
      @apply inline-block pl-2 pr-6;
    }
  }

  p {
    @apply my-6;

    em {
      @apply text-primary-400 text-opacity-75;
    }

    em:first-child {
      @apply block -mt-2 text-xs text-surface-700;
    }
  }

  h2 {
    @apply pt-6 mt-8 border-t-2 border-primary-400 border-opacity-5;
  }

  div.code-toolbar > .toolbar {
    @apply opacity-100 mt-2 mr-4;

    button {
      @apply py-1.5 px-2 rounded-sm text-xs shadow-none drop-shadow;
    }
  }

  code {
    @apply px-1 bg-primary-400 bg-opacity-10 text-surface-800 rounded-sm text-sm font-normal;
  }

  pre {
    @apply mt-4 mb-6 bg-surface-300 rounded-md;

    code {
      @apply bg-transparent;
    }

  }

  table {
    @apply w-full my-12 border-collapse rounded-lg overflow-hidden;

    code {
      @apply bg-primary-400 bg-opacity-10;
    }

    thead {
      @apply bg-surface-200 text-primary-300;

      tr:first-child {
        th:first-child {
          @apply rounded-l;
        }

        th:last-child {
          @apply rounded-r;
        }
      }

      th {
        @apply font-bold text-left px-6 py-4 border-2 border-opacity-25 border-primary-400;
      }
    }

    tbody {

      tr {

        &:nth-child(odd) {
          @apply bg-surface-300;
        }

        &:nth-child(even) {
          @apply bg-surface-300;
        }

        td {
          @apply px-4 py-2 border-2 border-primary-400 border-opacity-25 text-surface-800 font-normal;
        }

        &:last-child {
          td:first-child {
            @apply rounded-bl;
          }

          td:last-child {
            @apply rounded-br;
          }
        }
      }
    }
  }
}

</style>