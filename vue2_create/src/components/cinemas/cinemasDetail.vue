<template>
  <div>
    <h3>{{cinema.name}}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cinema: []
    }
  },
  mounted() {
    // 获取路由传入ID
    console.log(this.$route.params.myid);
    var id = this.$route.params.myid;
    // 模板字符串语法。。。
    // var a = 1;
    // console.log(`a的值是：${a}`)
    this.$http({
      
      url: `https://m.maizuo.com/gateway/?cinemaId=${id}&k=1440310`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15889272153375844294689","bc":"110100"}',
        'X-Host': 'mall.film-ticket.cinema.info'
      },
    }).then((res) => {
      console.log(res.data.data.cinema)
      this.cinema = res.data.data.cinema;
    });
  },
}
</script>

<style lang="stylus" scoped>

</style>