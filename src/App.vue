<template>
  <div class="page-container">
    <app-nav></app-nav>
    <app-page :key="$route.name">
      <router-view></router-view>
    </app-page>
    <app-footer></app-footer>
  </div>
</template>

<script>

import AppNav from "@/components/AppNav.vue";
import AppFooter from "@/components/AppFooter.vue";
import AppPage from "@/components/AppPage.vue";

export default {
  name: 'App',
  components: {AppPage, AppFooter, AppNav},
}
</script>

<style lang="scss" scoped>

.page-container {
  @apply flex w-full;
}

</style>
