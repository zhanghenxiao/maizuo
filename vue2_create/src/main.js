import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/icon/iconfont.css'
import '@/assets/reset.css'
// 按需导入elment
// import './elment'

import axios from 'axios'
// 加上vue原型链全局使用s
Vue.prototype.$http = axios

Vue.config.productionTip = false;

// import AMap from 'vue-amap'
// Vue.use(AMap)
// AMap.initAMapApiLoader({
//   // 高德key
//   key: '7da2ed62573a4138b58e8490f67d79d4',
//   // 插件集合 （插件按需引入）
//   plugin: ['AMap.Geolocation','AMap.CitySearch']
// });

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
