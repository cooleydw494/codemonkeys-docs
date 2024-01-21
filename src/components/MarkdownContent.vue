<template>
  <div class="md-content"
       v-html="parsedMarkdown"
       ref="mdContent">
  </div>
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
      activeH2: null,
      observer: null,
    };
  },
  created() { this.parseMarkdown(); },
  mounted() { this.observeH2s(); },
  beforeDestroy() { this.observer?.disconnect(); },
  watch: {
    activeH2(newAnchor, oldAnchor) {
      if (oldAnchor) {
        const oldActiveElement = this.$refs.mdContent.querySelector(`.table-of-contents a[href="#${oldAnchor}"]`);
        oldActiveElement?.classList.remove('active-anchor');
      }
      const newActiveElement = this.$refs.mdContent.querySelector(`.table-of-contents a[href="#${newAnchor}"]`);
      newActiveElement?.classList.add('active-anchor');
    }
  },
  methods: {
    parseMarkdown() {
      const md = new MarkdownIt()
          .use(prism, { highlightInlineCode: true })
          .use(markdownItAnchor, {permalink: false, slugify: this.customSlugify})
          .use(markdownItTocDoneRight, {format: this.formatToc, level: [2], slugify: this.customSlugify});
      this.parsedMarkdown = md.render(this.markdown);
      this.$nextTick(this.wrapEmojis);
    },
    formatToc(x, htmlencode) {
      return `<span>${htmlencode(x)}</span>`;
    },
    observeH2s() {
      const options = {
        root: this.$refs.mdContent.parentElement.parentElement,
        threshold: 1,
      };

      this.observer = new IntersectionObserver((entries) => {
        let visibleEntries = entries.filter(entry => entry.isIntersecting);
        // Assuming you want the first (top-most) visible h2
        if (visibleEntries.length) {
          this.activeH2 = visibleEntries[0].target.id;
        }
      }, options);

      // Observe all h2 elements
      this.$refs.mdContent.parentElement.parentElement.querySelectorAll('h2').forEach(h2 => {
        this.observer.observe(h2);
      });
    },
    customSlugify(string) {
      // Remove emojis/symbols
      let sanitizedString = string.replace(/[\p{Emoji}]/gu, '');
      // Make anchor-friendly slug
      return encodeURIComponent(sanitizedString.trim().replace(/\s+/g, '-').toLowerCase());
    },
    wrapEmojis() {
      document.body.querySelectorAll('.md-content h2, .md-content h3, .md-content span, .md-content p').forEach(p => {
        const reEmoji = /\p{RI}\p{RI}|\p{Emoji}(\p{EMod}+|\u{FE0F}\u{20E3}?|[\u{E0020}-\u{E007E}]+\u{E007F})?(\u{200D}\p{Emoji}(\p{EMod}+|\u{FE0F}\u{20E3}?|[\u{E0020}-\u{E007E}]+\u{E007F})?)+|\p{EPres}(\p{EMod}+|\u{FE0F}\u{20E3}?|[\u{E0020}-\u{E007E}]+\u{E007F})?|\p{Emoji}(\p{EMod}+|\u{FE0F}\u{20E3}?|[\u{E0020}-\u{E007E}]+\u{E007F})/gu;
        p.innerHTML = p.innerHTML.replace(reEmoji, '<span class="emoji" role="img" aria-hidden="true">$&</span>');
      });
    },
  },
}
</script>

<style lang="scss">

.md-content {
  ul, ol {
    @apply block pl-2 pr-6 py-2 mt-0 bg-surface-300 text-2xs md:text-xs.5 font-normal;
    @apply rounded drop-shadow shadow-inner list-none;

    li {
      @apply ml-2 md:ml-2 my-3.5 w-full;
      @apply relative pl-4;

      &::before {
        @apply text-4xs opacity-80;
        content: '🔵 ';
        @apply absolute left-0 top-0.5 md:top-1.5;
      }

      ul, ol {
        @apply pl-0 py-0 mt-0 bg-transparent drop-shadow-none shadow-none;

        li {
          @apply md:ml-6;

          &::before {
            content: '🔹';
            @apply top-1 text-3xs opacity-75;
          }

          &:last-child {
            @apply mb-6;
          }
        }
      }
    }
  }

  .table-of-contents {
    @apply block md:inline-block;
    @apply lg:sticky lg:-ml-64 lg:top-0 lg:-mt-36 lg:pb-36;

    ul, ol {
      @apply inline-block w-full mt-4 pr-4 md:w-56 md:pl-0 md:mt-0 lg:absolute lg:-ml-4 2xl:mt-0;
      @apply drop-shadow-xl shadow-inner text-xs;

      li {
        @apply list-none p-0 md:ml-6;
        &::before {
          @apply content-none;
        }


        a {
          @apply w-full rounded-sm px-2 py-2 -mr-6 -my-2 md:px-2 md:-ml-4;

          &.active-anchor {
            @apply text-white bg-surface-200 bg-opacity-75 transition-all duration-300 transform;
          }

          &:hover {
            @apply text-white;
          }
        }

        ol {
          @apply hidden;
        }
      }
    }
  }

  p {
    @apply my-4;
    line-height: 1.25rem;

    em {
      @apply text-inline-code text-opacity-75;
      &:first-child {
        @apply block text-surface-700;
      }
    }
  }

  h1 { @apply lg:mt-0; }
  h2 { @apply pb-2 mt-12 border-b-2 border-primary-300 border-opacity-20; }
  h3 { @apply  pb-1 mt-10 border-b-2 border-primary-600 border-opacity-5; }

  code {
    @apply px-1 bg-surface-300 rounded-sm font-normal;
    padding-top: .0725rem; padding-bottom: .0725rem;
    margin-top: -.0725rem; margin-bottom: -.0725rem;
  }

  pre {
    @apply mt-4 mb-6 bg-surface-300 rounded-md;
    code { @apply pl-0 bg-transparent; }
  }

  table {
    @apply my-12 border-collapse overflow-x-scroll;
    @apply w-full rounded drop-shadow shadow-inner;

    code { @apply bg-primary-400 bg-opacity-10; }

    thead {
      @apply bg-surface-100 bg-opacity-20 text-primary-300 rounded;

      tr:first-child {
        th:first-child { @apply rounded-l; }
        th:last-child { @apply rounded-r; }
        th { @apply font-bold text-left px-6 py-4 border border-opacity-20 border-primary-200; }
      }
    }

    tbody {
      @apply rounded;
      tr {
        @apply bg-surface-300;
        td {
          @apply px-4 py-2 border border-primary-200 border-opacity-20 text-surface-800 font-normal;
          code { @apply bg-surface-200 bg-opacity-60; }
          &:first-child { @apply rounded-bl; }
          &:last-child { @apply rounded-br; }
        }
      }
    }
  }

  .emoji {
    @apply opacity-90;
  }
}

</style>