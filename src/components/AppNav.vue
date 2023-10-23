<template>
  <nav class="nav">
    <div class="home">
      <router-link class="link" :to="{name: 'HomePage'}">CodeMonkeys</router-link>
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
        {name: 'CodemonkeysExplained', label: 'What?'},
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
  }
}
</script>

<style scoped>
</style>