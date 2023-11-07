import Vue, { createApp, nextTick } from 'vue'
import './assets/main.scss'
import App from './App.vue'
import router from "@/router";
import './assets/tailwind.css'

router.afterEach((to, from) => {
    nextTick(() => {
        // Handle title
        if (to.name === 'CodeMonkeys') document.title = 'CodeMonkeys Docs';
        else
        document.title = `${to.name} | CodeMonkeys`;

        // Handle anchor scrolling
        if (to.hash) {
            const element = document.querySelector(to.hash);
            if (element) element.scrollIntoView({behavior: 'smooth'});
        } else {
            const page = document.querySelector('#app .app-page');
            page.scrollTo({top: 0, behavior: 'smooth'});
        }

    }).then(r => r);
});

createApp(App).use(router).mount('#app')