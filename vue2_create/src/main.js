import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/icon/iconfont.css'
import '@/assets/reset.css'

import axios from 'axios'
// 加上vue原型链全局使用
Vue.prototype.$http = axios

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
