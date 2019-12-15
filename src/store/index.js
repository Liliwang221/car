import Vue from 'vue'
import Vuex from 'vuex'
<<<<<<< HEAD
import detail from "./modules/detail"
import carcolor from "./modules/carcolor.js"
import allcarimg from "./modules/allcarimg"
import home from "./modules/home"

import createLogger from "vuex/dist/logger"
=======
import createLogger from 'vuex/dist/logger'
import home from './modules/home'
import baojia from './modules/baojia'
import storeMen from './modules/storeMen'
>>>>>>> 5ba48fa26a0685115569852d41929bf6dbfe2576
Vue.use(Vuex)
export default new Vuex.Store({
<<<<<<< HEAD
 modules:{
   detail,
   carcolor,
   allcarimg,
   home
 },
 plugins:[createLogger]
=======
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    home,
    baojia,
    storeMen 
  },
  plugins:[createLogger]
>>>>>>> 5ba48fa26a0685115569852d41929bf6dbfe2576
})
