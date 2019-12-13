import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
 import Vant from 'vant';
// import 'vant/lib/index.css';
import { Swipe, SwipeItem, ImagePreview } from 'vant';
import 'vant/lib/index.css';

Vue.use(Swipe).use(SwipeItem);
Vue.use(ImagePreview);
Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
