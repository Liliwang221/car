import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Detail from "../views/detail"
Vue.use(VueRouter)
const Colorimg=()=>import("../views/colorimg")
// const Colors=()=>import("../views/colorimg/colors")

const routes = [
  {
    path:"/detail",
    component:Detail
  },{
    path:"/colorimg",
    component:Colorimg
   }
  //,{
  //   path:'/colors',
  //   component:Colors
  // }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
