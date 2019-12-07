import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path:'*',
    redirect:'/home'
  },
  {
    path: '/detail',
    name: 'detail',
    
    component: () => import('../views/detail.vue')
  },
  {
    path: '/baojia',
    name: 'baojia',
    
    component: () => import('../views/baojia.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
