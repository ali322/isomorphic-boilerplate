import Vue from 'vue'
import VueRouter from 'vue-router'
import Events from './module/app.js'
import User from '../user/app'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Events },
    { path: '/user/:user', component: User },
    { path: '*', component: { template: '<div>not found</div>' } }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    window.scrollTo(0, 0)
    next()
})

export default router
