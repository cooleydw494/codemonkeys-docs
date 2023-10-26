<template>
  <footer class="footer">

    <div class="copyright">
      <p>CodeMonkeys uses MIT License.</p>
    </div>

    <div class="socials">
      <a href="https://github.com/cooleydw494/codemonkeys" aria-label="GitHub" target="_blank" class="social">
        <svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 24 24" fill="currentColor" role="img" class="h-6 w-6"><path fill-rule="evenodd" d="M12 22C6.477 22 2 17.523 2 12C2 7.477 6.477 3 12 3C17.523 3 22 7.477 22 12C22 16.4113 18.6523 20.133 14.25 21.387V16.605H10.75V14.105H14.25V11.105H10.75V8.605H14.25V6.138C14.2028 4.70005 14.9847 3.31662 16.3525 2.56156C17.7202 1.80649 19.3804 2.00375 20.455 3H21.75V5.5H20.25C19.1875 5.5 18.1875 6.30001 18.1875 7.5V11.105H21.75L21.1875 14.105H18.1875V21.387C13.785 20.133 10.4377 16.4113 10 12C10 17.523 14.477 22 20 22H12Z"></path></svg>
      </a>
      <a href="https://twitter.com/Nobody43373414" aria-label="Twitter" target="_blank" class="social">
        <svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 24 24" fill="currentColor" role="img" class="h-6 w-6"><path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.793-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045 .77.127 1.134C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71 .87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.06c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.415-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.562 2.46-2.548l-.047-.02z"></path></svg>
      </a>
      <a href="https://www.linkedin.com/in/cooleydw494/" aria-label="LinkedIn" target="_blank" class="social">
        <svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 24 24" fill="currentColor" role="img" class="h-6 w-6"><path d="M22.225 0h-20.45C.785 0 0 .785 0 1.75v20.5C0 23.215.785 24 1.775 24h20.45c.99 0 1.775-.785 1.775-1.75V1.75C24 .785 23.215 0 22.225 0zm-13.35 20.955h-3.6v-11.1h3.6v11.1zm-1.8-12.6h-.038c-1.21 0-1.99-.847-1.99-1.903 0-1.06.793-1.903 1.987-1.903 1.195 0 1.99 .843 1.99 1.903 0 1.056 -.795 1.903-1.949 1.903zm13.349 12.6h-3.6v-6.047c0-1.52-.543-2.56-1.9-2.56-1.037 0-1.65 .696-1.922 1.367-.099 .238-.123 .568-.123 .9v6.34h-3.6v-11.1h3.6v1.52h.052c.502-.75 1.75-1.827 3.55-1.827 2.584 0 4.525 1.684 4.525 5.28v6.126z"></path></svg>
      </a>
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
  @apply absolute bottom-0 flex justify-between items-center w-full;
  @apply p-4 text-secondary;

  .copyright {
    @apply text-left text-sm;
  }

  .socials {
    @apply flex items-center space-x-2;

    .social {
      @apply text-gray-400 hover:text-white transition-colors duration-300;
    }
  }
}

</style>