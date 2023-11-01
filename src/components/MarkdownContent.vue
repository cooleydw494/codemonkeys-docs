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
    @apply inline-block pl-2 pr-6 py-2 mt-0 list-disc list-inside bg-surface-300 font-normal;
    @apply rounded drop-shadow shadow;

    li {
      @apply ml-2 md:ml-6 my-3 w-full;
    }

    ul, ol {
      @apply py-0 mt-0 bg-transparent drop-shadow-none shadow-none;

      li {
        @apply ml-8 md:ml-12;
        list-style: circle;
      }
    }
  }

  .table-of-contents {
    @apply 2xl:sticky 2xl:-ml-80 2xl:top-0;

    ul, ol {
      @apply 2xl:absolute w-full md:w-64 inline-block pl-0 mt-4 2xl:mt-0 pr-6;

      li {
        @apply list-none;
      }
    }
  }

  p {
    @apply my-6;

    em {
      @apply text-primary-400 text-opacity-75;
    }

    em:first-child {
      @apply block text-surface-700;
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
    @apply px-1 bg-primary-400 bg-opacity-10 text-surface-800 rounded-sm font-normal;
  }

  pre {
    @apply mt-4 mb-6 bg-surface-300 rounded-md;

    code {
      @apply bg-transparent;
    }

  }

  table {
    @apply my-12 border-collapse overflow-x-scroll;
    @apply rounded drop-shadow shadow;

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