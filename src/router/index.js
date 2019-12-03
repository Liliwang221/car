import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Detail from "../views/detail"
Vue.use(VueRouter)
const Colorimg=()=>import("../views/colorimg")


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path:"/detail",
    component:Detail
  },{
    path:"/colorimg",
    component:Colorimg
  }
  // {
  //   path: '/detail',
  //   name: 'detail',
  //   component: () => import('../views/detail.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
