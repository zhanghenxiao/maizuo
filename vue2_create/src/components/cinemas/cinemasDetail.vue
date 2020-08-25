<template>
  <div>
    <!-- 影院详情页数据采集有误 -->
    <h3>{{cinema.name}}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cinema: [],
      cinemaid: ''
    }
  },
  mounted() {
    
    // 获取路由传入ID
    console.log(this.$route.params.myid);
    var id = this.$route.params.myid;
    this.cinemaid = id
    this.getcinemaddata()
    this.getcitydata()
  },
  methods: {
    getcinemaddata() {
      // 模板字符串语法。。。
    // var a = 1;
    // console.log(`a的值是：${a}`)
    this.$http({
    url: `https://m.maizuo.com/gateway/?cinemaId=${this.cinemaid}&k=1631883`,
    headers: {
      'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15889272153375844294689","bc":"440300"}',
      'X-Host': 'mall.film-ticket.cinema.info'
    },
    }).then((res) => {
      console.log(res.data.data.cinema)
      this.cinema = res.data.data.cinema;
    });
    },
    getcitydata() {
      this.$http({
      url: `https://m.maizuo.com/gateway/?filmId=5043&cinemaId=${this.cinemaid}&date=1598284800&k=4972758`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15889272153375844294689","bc":"440300"}',
        'X-Host': 'mall.film-ticket.schedule.list'
      },
    }).then((res) => {
      // console.log(res.data.schedules)
    });
    }
  },
}
</script>

<style lang="stylus" scoped>

</style>