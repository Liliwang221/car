import Vue from 'vue'
import VueRouter from 'vue-router'
import Detail from "../views/detail"
Vue.use(VueRouter)

const Colorimg=()=>import("../views/colorimg")
const Home=()=>import("../components/HelloWorld")
const AllSmallImg=()=>import("../views/colorimg/allSmallImg")

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
   },{
     path:"/allimg",
     component:AllSmallImg
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
