import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import home from './modules/home'
import baojia from './modules/baojia'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    home,
    baojia 
  },
  plugins:[createLogger]
})
