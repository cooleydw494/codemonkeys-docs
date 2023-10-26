<template>
  <div class="nav-container">

    <button class="button hamburger" @click="toggleMenu" v-if="isMobile">
      |||
    </button>

    <!-- Mobile View -->
    <nav class="mobile-nav" v-if="showMenu && isMobile">
      <div class="nav-item" v-for="navItem in navItems" :key="navItem.name">
        <router-link :to="{name: navItem.name}" class="link" @click="toggleMenu">
          {{navItem.label}}
        </router-link>
      </div>
    </nav>

    <!-- Desktop View -->
    <nav class="desktop-nav" v-else>
      <router-link class="home nav-item" :to="{name: 'HomePage'}">
        <span>CodeMonkeys</span>
      </router-link>
      <router-link v-for="navItem in navItems"
                   :key="navItem.name"
                   :to="{name: navItem.name}"
                   class="nav-item">
        <span>{{navItem.label}}</span>
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
        {name: 'WhatIs', label: 'What?'},
        {name: 'GettingStarted', label: 'Get Started'},
        {name: 'Configuration', label: 'Config'},
        {name: 'MonkCLI', label: 'Monk CLI'},
        {name: 'Commands', label: 'Commands'},
        {name: 'Automations', label: 'Automations'},
        {name: 'FunctionCalling', label: 'Funcs'},
        {name: 'Barrels', label: 'Barrels'},
        {name: 'AdvancedTheme', label: 'Theme'},
        {name: 'AdvancedMonkeys', label: 'Monkeys'},
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

  .hamburger {
    @apply top-2 left-2 z-50;
  }

  nav {
    @apply z-50 backdrop-brightness-125 inline-block h-auto md:relative;
  }

  .mobile-nav {
    @apply md:hidden flex flex-col;
    width: 100vw;
  }

  .desktop-nav {
    @apply hidden md:block;
    @apply w-64;
    height: 100vh;
  }

  .nav-item {
    @apply block pl-10 pb-3 pt-6;
    @apply border-b-gray-700 border-solid border-b-2;
    @apply font-semibold tracking-tight;
    @apply text-secondary hover:text-white;
  }

}



</style>