import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    routes: [{
            name: 'home',
            path: '',
            redirect: '/about',
        }, {
            name: 'about',
            path: '/about',
            component: () => System.import('views/about.vue'),
        }
    ]
})
