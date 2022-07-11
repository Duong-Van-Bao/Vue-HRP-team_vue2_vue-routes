import Vue from 'vue'
import VueRouter from 'vue-router'
// @ts-ignore
import App from './App.vue'
import { routes } from './routes'

Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior(to, from, savedPosition) {
        // return { x: 0, y: 700 }
        if (savedPosition) {
            return savedPosition
        }
        if (to.hash) {
            return { selector: to.hash }
        }
    }
})

router.beforeEach((to, from, next) => {
    console.log('Global route guards');
    next();
})

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')