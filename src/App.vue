<template>
  <div class="page-container">
    <app-nav></app-nav>
    <div class="page">
      <router-view></router-view>
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>

import AppNav from "@/components/AppNav.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  name: 'App',
  components: {AppFooter, AppNav},
}
</script>

<style lang="scss" scoped>

.page-container {
  @apply flex w-full;

  .page {
    @apply relative flex w-full px-2 py-4;
    @apply lg:px-4 lg:py-8;
    height: 100vh;
  }

}

</style>
