<template>
<!-- 电影详情页 -->
  <div class="detail" v-if="item">
    <!-- <img :src="item.poster" height="211px" width="375px" /> -->
    <img :src="item.poster" class="poster" />
    <div class="des">
      <div class="name" style="color:#191a1b">{{item.name}}</div>
      <div class="category">{{item.category}}</div>
      <div class="nation">{{item.nation}} | {{item.runtime}}</div>
      <div class="synopsis">主演{{item.synopsis}}</div>
    </div>
    <h3 class="text">演职人员</h3>
    <!-- 通过父传子实现组件的共有,因class相同故需设置不同class才能实现渲染不同的个数-->
    <myswiper Perview=4 class="actors" myclass='actors'>
      <div class="swiper-slide" v-for="(actors,index) in item.actors" :key="index">
        <img class="im" :src="actors.avatarAddress">
        <div style="text-align:center">
          {{actors.name}}
        </div>
        <div style="text-align:center">
          {{actors.role}}
        </div>
      </div>
    </myswiper>

    <h3 class="text">剧照</h3>
    <myswiper Perview=3 class="photos" myclass='photos'>
      <div class="swiper-slide" v-for="item in item.photos" :key="item">
        <img class="im" :src="item">
      </div>
    </myswiper>
  </div>
</template>

<script>
// vuex 安需导入
import { SHOW_NAV, HIDDEN_NAV } from "@/store/allStatus";
import myswiper from './swiper'
export default {
  data() {
    return {
      item: null,
      data: [1,2,3,4]
    };
  },
  components: {
    myswiper
  },
  beforeMount() {
    console.log("beforeMount");
    // 当页面还未渲染时隐藏nav
    // this.$store.commit('HIDDEN_NAV', false)
    this.$store.commit(HIDDEN_NAV, false);
  },
  mounted() {
    // 获取路由传入ID
    console.log(this.$route.params.myid);
    var id = this.$route.params.myid;
    // 模板字符串语法。。。
    // var a = 1;
    // console.log(`a的值是：${a}`)
    this.$http({
      url: `https://m.maizuo.com/gateway?filmId=${id}&k=8123677`,
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"15889272153375844294689","bc":"110100"}',
        "X-Host": "mall.film-ticket.film.info",
      },
    }).then((res) => {
      console.log(res.data.data.film)
      this.item = res.data.data.film;
    });
  },
  beforeDestroy() {
    console.log("beforeDestroy");
    this.$store.commit(SHOW_NAV, true);
  },
};
</script>

<style lang="stylus" scoped>
  .nameimg {
    flex: 0, 0, 66px;
  }

  .des {
    padding-left 10px
    color #797d82
  }

  .name {
    font-size: 18px;
    padding-bottom: 8px;
  }

  .grade {
    color: #ffb232;
    padding-bottom: 8px;
  }

  .director {
    color: #797d82;
    padding-bottom: 8px;
  }

  .nation {
    color: #797d82;
    padding-bottom: 8px;
  }

  .im{
    width: 85px;
    height: 85px;
    padding-left 10px
    padding-bottom 5px
  }
  
  .test
    background yellow
  .text
    padding 10px 0px 10px 10px
    color #191a1b
    font-size 14px
.poster
  width 100%
  height 211px
  padding-bottom 10px
</style>