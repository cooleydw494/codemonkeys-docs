<template>
  <footer class="footer">

    <div class="socials">
<!--      <a href="https://www.linkedin.com/in/cooleydw494/" aria-label="LinkedIn" target="_blank" class="social">-->
<!--        <svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 25 25" fill="currentColor" role="img">-->
<!--          <path d="M22.225 0h-20.45C.785 0 0 .785 0 1.75v20.5C0 23.215.785 24 1.775 24h20.45c.99 0 1.775-.785 1.775-1.75V1.75C24 .785 23.215 0 22.225 0zm-13.35 20.955h-3.6v-11.1h3.6v11.1zm-1.8-12.6h-.038c-1.21 0-1.99-.847-1.99-1.903 0-1.06.793-1.903 1.987-1.903 1.195 0 1.99 .843 1.99 1.903 0 1.056 -.795 1.903-1.949 1.903zm13.349 12.6h-3.6v-6.047c0-1.52-.543-2.56-1.9-2.56-1.037 0-1.65 .696-1.922 1.367-.099 .238-.123 .568-.123 .9v6.34h-3.6v-11.1h3.6v1.52h.052c.502-.75 1.75-1.827 3.55-1.827 2.584 0 4.525 1.684 4.525 5.28v6.126z"></path>-->
<!--        </svg>-->
<!--      </a>-->
      <a href="https://github.com/cooleydw494/codemonkeys" aria-label="GitHub" target="_blank" class="social">
        <svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 98 96" fill="currentColor" role="img">
          <path fill-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"></path>
        </svg>
      </a>
      <a href="https://twitter.com/Nobody43373414" aria-label="Twitter" target="_blank" class="social">
        <svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 330 330.3" fill="currentColor" role="img" class="mt-0.5">
          <path d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66"></path>
        </svg>
      </a>
    </div>

    <div class="copyright">
      <p>OSS - MIT License</p>
    </div>

  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style lang="scss" scoped>

.footer {
  @apply w-full absolute bottom-0 flex justify-start items-center;
  @apply px-6 py-4 text-surface-600 bg-surface-100;

  .copyright {
    @apply text-left text-sm pl-6;
  }

  .socials {
    @apply flex items-center space-x-4;

    .social {
      @apply w-5 h-5 text-surface-600 hover:text-primary-400 transition-colors duration-200;
    }
  }
}

</style>