<template>
  <nav class="nav">
    <div class="home">
      <router-link class="link" :to="{name: 'HomePage'}">CodeMonkeys Docs</router-link>
    </div>
    <div class="hamburger-container">
      <button class="button">
        |||
      </button>
    </div>
    <div class="nav-item-container" v-for="navItem in navItems" :key="navItem.name">
      <div class="nav-item">
        <router-link :to="{name: navItem.name}" class="link">
          {{navItem.label}}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNav',
  data() {
    return {
      navItems: [
        {name: 'HomePage', label: 'Home'},
        {name: 'GettingStarted', label: 'Getting Started'},
        {name: 'CodemonkeysExplained', label: 'CodeMonkeys Explained'},
        {name: 'Configuration', label: 'Configuration'},
        {name: 'MonkCLI', label: 'Monk CLI'},
        {name: 'Commands', label: 'Commands'},
        {name: 'Automations', label: 'Automations'},
        {name: 'FunctionCalling', label: 'Function Calling'},
        {name: 'Barrels', label: 'Barrels'},
        {name: 'AdvancedTheme', label: 'Advanced Theming'},
        {name: 'AdvancedMonkeys', label: 'Advanced Monkeys'},
        {name: 'Contribution', label: 'Contribution'},
        {name: 'FAQ', label: 'FAQ'},
      ]
    }
  }
}
</script>

<style scoped>
</style>