<template>
  <section>
    <h1 class="text-primary font-heading text-5xl">Welcome to CodeMonkeys Docs</h1>
    <p class="text-secondary font-body text-xl">The leading resource for learning how to use the CodeMonkeys framework.</p>
    <router-link class="text-tertiary font-body text-xl" :to="{name: 'GettingStarted'}">Get Started</router-link>
  </section>
</template>
<script>
  export default {
    name: 'HomePage',
  }
</script>
<style scoped>
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
</style>