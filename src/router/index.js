import Vue from 'vue'
import VueRouter from 'vue-router'
<<<<<<< HEAD
=======
import Detail from "../views/detail"
import Baojia from "../views/baojia"
>>>>>>> 0783eeb779ada8af1c3be95bae97b6bfbdaf447f
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
