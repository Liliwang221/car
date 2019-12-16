import Vue from 'vue'
import VueRouter from 'vue-router'

import Baojia from "../views/baojia"
Vue.use(VueRouter)
// import Detail from "../views/detail"
const Detail=()=>import("../views/detail")
const Colorimg=()=>import("../views/colorimg")
const Home=()=>import("../components/HelloWorld")


const routes = [
  {
    path:"/home",
    // name:"Home",
    component:Home
  },
  {
    path:"/detail",
    component:Detail
  },{
    path:"/colorimg",
    component:Colorimg
   },
   {
    path:"/baojia",
    component:Baojia
   }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
