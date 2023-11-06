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
                   class="nav-item link"
                   @click="toggleMenu">
        {{ navItem.label }}
      </router-link>
    </nav>

    <!-- Desktop View -->
    <nav class="desktop-nav" v-else>
      <router-link v-for="(navItem, index) in navItems"
                   :key="navItem.name"
                   :tabindex="index+1"
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
        {name: 'Config', label: 'Config'},
        {name: 'Monk CLI', label: 'Monk CLI'},
        {name: 'Commands', label: 'Commands'},
        {name: 'Automations', label: 'Automations'},
        {name: 'Barrels', label: 'Barrels'},
        {name: 'Monkeys', label: 'Monkeys'},
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
      width: 95%;
      @apply absolute top-0 z-40 mt-8 overflow-y-scroll shadow-inner drop-shadow-2xl;
      @apply md:hidden flex flex-col rounded;
      @apply text-lg;

      .nav-item {
        @apply rounded-b text-center py-4;

        &:first-child {
          @apply rounded-t-sm;
        }
      }
    }

    &.desktop-nav {
      @apply w-full hidden md:inline-block px-2 py-3 ml-4 mt-12;
      @apply rounded drop-shadow-xl shadow-inner;
    }
  }

  .nav-item {
    @apply w-full bg-surface-300;
    @apply rounded-sm block px-4 py-2;
    @apply transition-all duration-300 transform;

    &.router-link-active {
      @apply bg-surface-100 bg-opacity-40;
    }

    &:hover {
      @apply text-primary-100;
    }

    &:first-child {
      @apply rounded-t;
    }

    &:last-child {
      @apply rounded-b;
    }
  }

}

</style>