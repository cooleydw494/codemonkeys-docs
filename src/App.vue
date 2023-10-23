<template>
  <div>
    <app-nav></app-nav>
    <page>
      <router-view></router-view>
    </page>
    <app-footer></app-footer>
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

<style>
</style>
