import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {path: '/', name: 'Home', redirect: '/what-is-it'},
    {path: '/get-started', name: 'Get Started', component: () => import('@/pages/sections/GettingStarted.vue')},
    {path: '/what-is-it', name: 'What Is It?', component: () => import('@/pages/sections/WhatIs.vue')},
    {path: '/config', name: 'Config', component: () => import('@/pages/sections/ConfigPage.vue')},
    {path: '/monk-cli', name: 'Monk CLI', component: () => import('@/pages/sections/MonkCli.vue')},
    {path: '/commands', name: 'Commands', component: () => import('@/pages/sections/CommandsPage.vue')},
    {path: '/automations', name: 'Automations', component: () => import('@/pages/sections/AutomationsPage.vue')},
    {
        path: '/funcs',
        name: 'Funcs',
        component: () => import('@/pages/sections/FunctionCalling.vue')
    },
    {path: '/barrels', name: 'Barrels', component: () => import('@/pages/sections/BarrelsPage.vue')},
    {path: '/advanced-theme', name: 'Theme', component: () => import('@/pages/sections/ThemeAdvanced.vue')},
    {
        path: '/advanced-monkeys',
        name: 'Monkeys',
        component: () => import('@/pages/sections/MonkeysAdvanced.vue')
    },
    {path: '/contribution', name: 'Contribution', component: () => import('@/pages/sections/ContributionPage.vue')},
    {path: '/faq', name: 'FAQ', component: () => import('@/pages/sections/FAQ.vue')}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
