<template>
  <div>
    <img :src="film.poster" width="375px">
  </div>
</template>

<script>
import { SHOW_NAV, HIDDEN_NAV} from '@/store/allStatus'
export default {
  data() {
    return {
      film: {}
    }
  },
  beforeMount() {
    console.log('beforeMount')
    // 当页面还未渲染时隐藏nav
    // this.$store.commit('HIDDEN_NAV', false)
    this.$store.commit(HIDDEN_NAV, false)
  },
  mounted() {
    // 获取路由传入ID
    console.log(this.$route.params.myid)
    var id = this.$route.params.myid
    // 模板字符串语法。。。
    // var a = 1;
    // console.log(`a的值是：${a}`)
    this.$http({
      url: `https://m.maizuo.com/gateway?filmId=${id}&k=8123677`,
       headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15889272153375844294689","bc":"110100"}',
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then(res =>{
      // console.log(res.data.data.film)
      this.film = res.data.data.film
    })
  },
  beforeDestroy() {
    console.log('beforeDestroy')
    this.$store.commit(SHOW_NAV, true)
  },
}
</script>

<style>

</style>