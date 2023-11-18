import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {path: '/', name: 'CodeMonkeys', component: () => import('@/pages/sections/CodeMonkeys.vue')},
    {path: '/get-started', name: 'Get Started', component: () => import('@/pages/sections/GettingStarted.vue')},
    {path: '/monk-cli', name: 'Monk CLI', component: () => import('@/pages/sections/MonkCli.vue')},
    {path: '/commands', name: 'Commands', component: () => import('@/pages/sections/CommandsPage.vue')},
    {path: '/config', name: 'Config', component: () => import('@/pages/sections/ConfigPage.vue')},
    {path: '/monkeys', name: 'Monkeys', component: () => import('@/pages/sections/MonkeysPage.vue')},
    {path: '/automations', name: 'Automations', component: () => import('@/pages/sections/AutomationsPage.vue')},
    {path: '/barrels', name: 'Barrels', component: () => import('@/pages/sections/BarrelsPage.vue')},
    {path: '/funcs', name: 'Funcs', component: () => import('@/pages/sections/FuncsPage.vue')},
    {path: '/contribution', name: 'Contribution', component: () => import('@/pages/sections/ContributionPage.vue')},
    {path: '/faq', name: 'FAQ', component: () => import('@/pages/sections/FAQ.vue')}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
