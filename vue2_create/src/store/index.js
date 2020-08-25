import Vue from 'vue'
import Vuex from 'vuex'
import { SHOW_NAV, HIDDEN_NAV} from './allStatus'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isShow: true,
    // 只要网页不被刷新，就会使用vuex 中缓存数据
    comingSoon: [],
    localcities: {},
    //存储
    localcity: '' 
  },
  // 操作同步
  mutations: {
    // 二种写法
    // SHOW_NAV(state,data){
    //   state.isShow = data
    // },
    [SHOW_NAV](state,data){
      state.isShow = data
    },

    [HIDDEN_NAV](state,data){
      state.isShow = data
    },
    comingSoonAction(state,data){
      state.comingSoon = data
    },
    // data数据是city.vue传过来的数据
    changeCities(state,data){
      localStorage.cities = data
    },
    changecitymutations(state,data) {
      localStorage.localcity = data
    },
  },

  // 操作异步
  actions: {
    // 异步处理，这里一定要写的是store
    getComingSoonData(store){
      axios({
        url:
        // 'https://m.maizuo.com/gateway?cityId=510100&pageNum=1&pageSize=10&type=2&k=2235178',
        `https://m.maizuo.com/gateway?cityId=${localStorage.localcity}&pageNum=1&pageSize=10&type=2&k=2235178`,
        headers: {
          "X-Client-Info":
            '{"a":"3000","ch":"1002","v":"5.0.4","e":"15889272153375844294689","bc":"110100"}',
          "X-Host": "mall.film-ticket.film.list",
        },
      }).then((res) => {
        // console.log(res.data);
        const films = res.data.data.films;
        // actions也需提交mutations,单向数据流，参考vuex官网
        store.commit('comingSoonAction',films)
      })
    }
  },
  modules: {
  }
})


// 举例验证【】写法
// var name = "key"
// var obj = {
//   // name = "aaa"
//   [name] : "aaa"
// }
// console.log(obj);