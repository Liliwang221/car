import Vue from 'vue'
import Vuex from 'vuex'
import detail from "./modules/detail"
import carcolor from "./modules/carcolor.js"
import allcarimg from "./modules/allcarimg"
import home from "./modules/home"

import createLogger from "vuex/dist/logger"
Vue.use(Vuex)
export default new Vuex.Store({
 modules:{
   detail,
   carcolor,
   allcarimg,
   home
 },
 plugins:[createLogger]
})
