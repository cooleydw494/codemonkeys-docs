import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  { path: '/', name: 'HomePage', component: () => import('@/pages/HomePage.vue') },
  { path: '/getting-started', name: 'GettingStarted', component: () => import('@/pages/sections/GettingStarted.vue') },
  { path: '/codemonkeys-explained', name: 'CodemonkeysExplained', component: () => import('@/pages/sections/CodemonkeysExplained.vue') },
  { path: '/configuration', name: 'Configuration', component: () => import('@/pages/sections/ConfigPage.vue') },
  { path: '/monk-cli', name: 'MonkCLI', component: () => import('@/pages/sections/MonkCli.vue') },
  { path: '/commands', name: 'Commands', component: () => import('@/pages/sections/CommandsPage.vue') },
  { path: '/automations', name: 'Automations', component: () => import('@/pages/sections/AutomationsPage.vue') },
  { path: '/function-calling', name: 'FunctionCalling', component: () => import('@/pages/sections/FunctionCalling.vue') },
  { path: '/barrels', name: 'Barrels', component: () => import('@/pages/sections/BarrelsPage.vue') },
  { path: '/advanced-theme', name: 'AdvancedTheme', component: () => import('@/pages/sections/ThemeAdvanced.vue') },
  { path: '/advanced-monkeys', name: 'AdvancedMonkeys', component: () => import('@/pages/sections/MonkeysAdvanced.vue') },
  { path: '/contribution', name: 'Contribution', component: () => import('@/pages/sections/ContributionPage.vue') },
  { path: '/faq', name: 'FAQ', component: () => import('@/pages/sections/FAQ.vue') }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
