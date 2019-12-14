import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Vant from 'vant';
// import 'vant/lib/index.css';

// Vue.use(Vant);
//引入自定义指令
import '@/directions/stricky';
import '@/directions/letter';
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
