<template>
  <section>
    <h1 class="text-5xl mb-8">Welcome to CodeMonkeys Docs</h1>
    <p class="text-xl mb-8">The leading resource for learning how to use the CodeMonkeys framework.</p>
    <button class="button">
      <router-link :to="{name: 'GettingStarted'}">Get Started</router-link>
    </button>
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
    flex-grow: 1;
    align-items: center;
    justify-content: center;
  }
</style>