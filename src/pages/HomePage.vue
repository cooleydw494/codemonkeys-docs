<template>
  <section title="CodeMonkeys Landing Page content">

    <div class="intro">
      <p class="mb-1">
        Welcome to the CodeMonkeys Docs, here to help you dig into the framework with relative ease.
      </p>
      <p>
        Visit the <a class="link" :href="sphinxLink" target="_blank">Sphinx Docs</a> for sourcecode documentation.
      </p>
    </div>

    <div class="img-container">
      <img src="../assets/codemonkeys.png"
         alt="CodeMonkeys artistic illustration">
    </div>

  </section>
</template>
<script>
  export default {
    name: 'HomePage',
    data() {
      return {
        sphinxLink: 'https://cooleydw494.github.io/codemonkeys'
      }
    }
  }
</script>

<style lang="scss" scoped>
  section {
    @apply w-full h-full flex flex-col items-center justify-center;

    .intro {
      @apply mb-6 text-center text-surface-600;
    }

    .img-container {
      @apply relative rounded-xl;
      height: 70%;
      overflow-y: hidden;

      img {
        @apply w-full max-w-xl lg:max-w-2xl xl:max-w-3xl;
        opacity: .65;
        margin-top: -9%;
      }
    }
  }
</style>