<template>
  <div>
    <div class="city">
      <div class="cityname" v-if="cinemas">
        <!-- 根据不同的城市选择，渲染不同的城市影院页面 -->
        <router-link to="/city" tag="div" class="nameif">
          <!-- v-if="cinemas[0].cityName" -->
          <p >
            {{cinemas[0].cityName}}  
          </p>
        </router-link>
        <div class="cinemas">影院</div>
        <div class="search">搜索</div>
      </div>
      <div class="nav">
        <div>全程</div>
        <div>APP订票</div>
        <div>最近去过</div>
      </div>
    </div>
    <!-- 内联样式优先级高于外联样式try -->
    <div class="try" :style="mystyle">
      <ul>
        <li
          class="des"
          v-for="item in cinemas"
          :key="item.cinemaId"
          @click="change(item.cinemaId)"
        >
          <div class="name">{{ item.name }}</div>
          <div class="address">{{ item.address }}</div>
        </li>
        <!-- <div class="price">￥{{item.lowPrice /100}}起</div> -->
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      cinemas: [],
      mystyle:{
        height: '0px'
      }
    };
  },
  mounted() {
    // 浏览器窗口高度
    console.log(document.documentElement.clientHeight)
    const windowHeight = document.documentElement.clientHeight
    this.mystyle.height = windowHeight - 134.6 +'px'
    console.log(this.mystyle.height);
    this.getData();
  },
  methods: {
    //  卖座电影 https://m.maizuo.com/v5/?co=mzmovie#/films/nowPlaying
    
    getData() {
      this.$http({
        url:
          // "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=5612313",
          `https://m.maizuo.com/gateway?cityId=${localStorage.localcity}&ticketFlag=1&k=5612313`,
        headers: {
          "X-Client-Info":
            '{"a":"3000","ch":"1002","v":"5.0.4","e":"15889272153375844294689","bc":"110100"}',
          "X-Host": "mall.film-ticket.cinema.list",
        },
      }).then((res) => {
        console.log(res.data);
        const cinemas = res.data.data.cinemas;
        // console.log(films);
        this.cinemas = cinemas;
        // 等待上个状态完成后再执行后面的
        this.$nextTick(() => {
          // 注意这个小点
          new BScroll(".try",{
            click: true,//点击事件无效，需添加可pass
            scrollbar: {// 滚动条
              fade: true,
              interactive: false,
            }
          });
        });
      });
    },
    change(id) {
      this.$router.push(`/cinemasDetail/${id}`);
    },
  },
};
</script>

<style lang="stylus" scoped>
.try
  height 300px
  overflow hidden
  // 让BScroll 不划出页面
  position relative
.cityname
  display flex
  height 40px
  line-height 40px
  .name
    padding-top 10px
    padding-left 20px
    // float left
    flex 0,0,40px
    box-sizing border-box
  .cinemas
    flex 1
    padding-top 10px
    text-align center
    font-size 18px
  .search
    padding-top 10px
    flex 0,0,40px
.nav
  padding-top 20px
  display: flex
  justify-content: space-around
  width 100%
  height 40px
  line-height 40px
.des
  padding-left 20px
  height 50px
  border: 1px solid #e5e4e9
  // position absolute
  .name
    color: #191a1b;
    font-size: 15px;
    padding-top: 10px
  .address
    color: #797d82;
    font-size: 12px;
    margin-top: 5px;
  // .price
  //   position relative
  //   left 300px
  //   top -30px
  //   color #ff5f16
</style>
