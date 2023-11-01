<template>
  <div class="nav-container">

    <button class="button hamburger" @click="toggleMenu" v-if="isMobile">
      |||
    </button>

    <!-- Mobile View -->
    <nav class="mobile-nav" v-if="showMenu && isMobile">
      <router-link v-for="(navItem, index) in navItems"
                   :key="navItem.name"
                   :tabindex="index+1"
                   :to="{name: navItem.name}"
                   class="nav-item"
                   @click="toggleMenu">
        {{ navItem.label }}
      </router-link>
    </nav>

    <!-- Desktop View -->
    <nav class="desktop-nav" v-else>
      <!--      <router-link class="home nav-item" :to="{name: 'HomePage'}">-->
      <!--        <span>CodeMonkeys</span>-->
      <!--      </router-link>-->
      <router-link v-for="(navItem, index) in navItems"
                   :key="navItem.name"
                   :tabindex="index+1"
                   :to="{name: navItem.name}"
                   class="nav-item">
        <span>{{ navItem.label }}</span>
      </router-link>
    </nav>

  </div>
</template>

<script>
export default {
  name: 'AppNav',
  data() {
    return {
      isMobile: window.innerWidth <= 768,
      showMenu: false,
      navItems: [
        {name: 'WhatIs', label: 'What is it?'},
        {name: 'GettingStarted', label: 'Get Started'},
        {name: 'Configuration', label: 'Config'},
        {name: 'MonkCLI', label: 'Monk CLI'},
        {name: 'Commands', label: 'Commands'},
        {name: 'Automations', label: 'Automations'},
        {name: 'Barrels', label: 'Barrels'},
        {name: 'AdvancedMonkeys', label: 'Monkeys'},
        {name: 'FunctionCalling', label: 'Funcs'},
        {name: 'AdvancedTheme', label: 'Theme'},
        {name: 'Contribution', label: 'Contribute'},
        {name: 'FAQ', label: 'FAQ'},
      ]
    }
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth <= 768;
    });
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
  },
}
</script>

<style lang="scss" scoped>

.nav-container {
  @apply flex justify-center items-center pb-4;
  @apply absolute md:relative w-full md:w-auto;

  .hamburger {
    @apply z-50 -mt-6 bg-surface-200;
  }

  nav {
    @apply bg-surface-300 bg-opacity-80 drop-shadow-xl;
    @apply z-50 md:relative;

    &.mobile-nav {
      width: 95%;
      @apply absolute top-0 z-40 mt-8 overflow-y-scroll shadow-2xl drop-shadow-2xl;
      @apply md:hidden flex flex-col rounded;

      .nav-item {
        @apply rounded-b-lg text-center py-4 pr-0;

        &:first-child {
          @apply rounded-t-sm;
        }
      }
    }

    &.desktop-nav {
      @apply hidden md:inline-block rounded;
      @apply w-44 lg:w-52 xl:w-64 -ml-6;
    }
  }

  .nav-item {
    @apply bg-surface-300 bg-opacity-100;
    @apply block pr-4 lg:pr-8 py-3 lg:py-4 text-right;
    @apply border-surface-500 border-solid border-b-2 border-opacity-50;
    @apply font-medium text-white tracking-wide;
    @apply hover:text-primary-400 hover:bg-surface-200 transition-colors duration-200;

    @apply rounded;

    &.router-link-active, &:hover {
      @apply rounded-t-none drop-shadow-md;
      @apply font-semibold text-primary-400 bg-surface-200 transition-colors duration-200;
    }

    &:first-child {
      @apply rounded-t-sm pt-4;
      @apply border-t-2;
    }

    &:last-child {
      @apply rounded-br-md;
    }
  }

}

</style>