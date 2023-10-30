<template>
  <section title="CodeMonkeys Landing Page content">

    <p class="intro">
      CodeMonkeys Framework Docs
    </p>

    <div class="img-container">
      <img src="../assets/codemonkeys.png"
         alt="CodeMonkeys artistic illustration">
    </div>

  </section>
</template>
<script>
  export default {
    name: 'HomePage',
  }
</script>

<style lang="scss" scoped>
  section {
    @apply w-full h-full flex flex-col items-center justify-center;

    .intro {
      @apply mb-6 text-center text-lg;
    }

    .img-container {
      @apply relative rounded-xl;
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