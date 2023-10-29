<template>
  <section title="CodeMonkeys Landing Page content">

    <div class="intro">
      <h1 class="mb-2 text-surface-700">
        CodeMonkeys Framework Documentation
      </h1>
    </div>

    <div class="img-container">
      <img src="../assets/codemonkeys.png"
         alt="CodeMonkeys artistic illustration">
    </div>

    <p class="text-sm">
      Visit the <a class="link" :href="sphinxLink" target="_blank">Sphinx Docs</a> for sourcecode documentation
    </p>

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
      @apply relative rounded-xl mb-8;
      height: 70%;
      overflow-y: hidden;

      img {
        @apply w-full max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl rounded-xl;
        opacity: .7;
        margin-top: -9%;
      }
    }
  }
</style>