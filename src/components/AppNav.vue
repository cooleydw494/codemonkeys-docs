<template>
  <div class="nav-container">

    <button class="button hamburger" @click="toggleMenu" v-if="isMobile">
      |||
    </button>

    <!-- Mobile View -->
    <nav class="mobile-nav" v-if="showMenu && isMobile">
      <router-link v-for="navItem in navItems"
                   :key="navItem.name"
                   :to="{name: navItem.name}"
                   class="nav-item link"
                   @click="toggleMenu">
        {{ navItem.label }}
      </router-link>
    </nav>

    <!-- Desktop View -->
    <nav class="desktop-nav" v-else>
      <router-link v-for="navItem in navItems"
                   :key="navItem.name"
                   :to="{name: navItem.name}"
                   class="nav-item link">
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
        {name: 'CodeMonkeys', label: 'CodeMonkeys'},
        {name: 'Get Started', label: 'Get Started'},
        {name: 'Monk CLI', label: 'Monk CLI'},
        {name: 'Commands', label: 'Commands'},
        {name: 'Config', label: 'Config'},
        {name: 'Monkeys', label: 'Monkeys'},
        {name: 'Automations', label: 'Automations'},
        {name: 'Barrels', label: 'Barrels'},
        {name: 'Funcs', label: 'Funcs'},
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
  @apply flex justify-center items-center md:items-start;
  @apply absolute md:relative w-full md:w-48;

  .hamburger {
    @apply z-50 -mt-6 bg-surface-200;
  }

  nav {
    @apply bg-surface-300 drop-shadow-xl shadow-inner;
    @apply z-50 md:relative;

    &.mobile-nav {
      @apply absolute top-0 z-40 mt-8 overflow-y-scroll;
      @apply md:hidden flex flex-col rounded text-lg;
      width: 95%;

      .nav-item {
        @apply rounded-b text-center py-4;
        &:first-child { @apply rounded-t-sm; }
      }
    }

    &.desktop-nav {
      @apply w-full hidden md:inline-block px-2 py-3 ml-4 mt-12;
      @apply text-sm rounded drop-shadow-xl shadow-inner;
    }
  }

  .nav-item {
    @apply w-full rounded-sm block px-4 py-2;
    @apply transition-all duration-300 transform;
    &.router-link-active { @apply text-white bg-surface-200 bg-opacity-75; }
    &:hover { @apply text-white; }
    &:first-child { @apply rounded-t; }
    &:last-child { @apply rounded-b; }
  }
}

</style>